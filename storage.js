const fs = require('fs');
const path = require('path');

let storageRoot = null;
let stateFile = null;
let attachmentsDir = null;

async function init(app) {
  const appRoot = app.getAppPath();
  const candidate = path.join(appRoot, 'storage');

  storageRoot = await ensureWritableDirectory(candidate);
  if (!storageRoot) {
    const fallback = path.join(app.getPath('userData'), 'storage');
    storageRoot = await ensureWritableDirectory(fallback, true);
  }
  if (!storageRoot) {
    throw new Error('无法找到可写入的存储目录');
  }

  attachmentsDir = path.join(storageRoot, 'attachments');
  await fs.promises.mkdir(attachmentsDir, { recursive: true });
  stateFile = path.join(storageRoot, 'state.json');
}

async function loadState() {
  if (!stateFile) {
    return { projects: [], logs: [] };
  }
  try {
    const exists = await fileExists(stateFile);
    if (!exists) {
      return { projects: [], logs: [] };
    }
    const raw = await fs.promises.readFile(stateFile, 'utf-8');
    const parsed = JSON.parse(raw);
    return {
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      logs: Array.isArray(parsed.logs) ? parsed.logs : []
    };
  } catch (error) {
    console.error('读取持久化文件失败', error);
    return { projects: [], logs: [] };
  }
}

async function saveState(payload) {
  if (!stateFile) {
    throw new Error('存储未初始化');
  }
  const serializable = {
    projects: Array.isArray(payload?.projects) ? payload.projects : [],
    logs: Array.isArray(payload?.logs) ? payload.logs : []
  };
  await fs.promises.mkdir(path.dirname(stateFile), { recursive: true });
  await fs.promises.writeFile(stateFile, JSON.stringify(serializable, null, 2), 'utf-8');
  return { success: true };
}

async function storeAttachments(files) {
  if (!attachmentsDir) {
    throw new Error('存储未初始化');
  }
  const results = [];
  for (const file of files) {
    if (!file || !file.path) continue;
    const originalPath = file.path;
    try {
      const exists = await fileExists(originalPath);
      if (!exists) continue;
      const safeName = await buildSafeFilename(file.name || path.basename(originalPath));
      const targetPath = path.join(attachmentsDir, safeName);
      await fs.promises.copyFile(originalPath, targetPath);
      results.push({
        name: file.name || path.basename(originalPath),
        path: targetPath,
        url: pathToFileUrl(targetPath)
      });
    } catch (error) {
      console.error('复制附件失败', error);
    }
  }
  return results;
}

async function ensureWritableDirectory(dir, create = false) {
  try {
    await fs.promises.mkdir(dir, { recursive: true });
    await fs.promises.access(dir, fs.constants.W_OK);
    return dir;
  } catch (error) {
    if (!create) {
      console.warn(`目录 ${dir} 无法写入，尝试备用目录。`, error);
    }
    return null;
  }
}

async function fileExists(filePath) {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function buildSafeFilename(rawName) {
  const ext = path.extname(rawName);
  const basename = path.basename(rawName, ext).replace(/[^\w\u4e00-\u9fa5-]+/g, '_');
  let candidate = `${basename || 'attachment'}${ext}`;
  let counter = 1;
  while (await fileExists(path.join(attachmentsDir, candidate))) {
    candidate = `${basename || 'attachment'}_${counter}${ext}`;
    counter += 1;
  }
  return candidate;
}

function pathToFileUrl(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  return `file://${encodeURI(normalized)}`;
}

module.exports = {
  init,
  loadState,
  saveState,
  storeAttachments
};
