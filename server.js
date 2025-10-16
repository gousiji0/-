const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const DEFAULT_STATE = { projects: [], logs: [] };
const MAX_PAYLOAD_SIZE = '25mb';

function resolveStoragePaths() {
  const rootDir = __dirname;
  const storageDir = path.join(rootDir, 'storage');
  const stateFile = path.join(storageDir, 'state.json');
  return { rootDir, storageDir, stateFile };
}

async function readStateFile(stateFile) {
  try {
    const raw = await fs.readFile(stateFile, 'utf-8');
    const parsed = JSON.parse(raw);
    return {
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      logs: Array.isArray(parsed.logs) ? parsed.logs : []
    };
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      return { ...DEFAULT_STATE };
    }
    throw error;
  }
}

async function writeStateFile(stateFile, storageDir, payload) {
  const serializable = {
    projects: Array.isArray(payload?.projects) ? payload.projects : [],
    logs: Array.isArray(payload?.logs) ? payload.logs : []
  };
  await fs.mkdir(storageDir, { recursive: true });
  await fs.writeFile(stateFile, JSON.stringify(serializable, null, 2), 'utf-8');
}

function createServer() {
  const app = express();
  const { rootDir, storageDir, stateFile } = resolveStoragePaths();

  app.use(express.json({ limit: MAX_PAYLOAD_SIZE }));

  app.get('/api/state', async (req, res) => {
    try {
      const state = await readStateFile(stateFile);
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.json(state);
    } catch (error) {
      console.error('读取状态文件失败', error);
      res.status(500).json({ message: '无法读取存储文件' });
    }
  });

  app.post('/api/state', async (req, res) => {
    try {
      await writeStateFile(stateFile, storageDir, req.body);
      res.json({ success: true });
    } catch (error) {
      console.error('写入状态文件失败', error);
      res.status(500).json({ message: '无法写入存储文件' });
    }
  });

  app.use(express.static(rootDir));

  return app;
}

function startServer() {
  const port = Number.parseInt(process.env.PORT, 10) || 3000;
  const app = createServer();
  app.listen(port, () => {
    console.log(`设计工作看板已启动: http://localhost:${port}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = {
  createServer,
  startServer
};
