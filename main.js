const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const storage = require('./storage');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 1280,
    minHeight: 720,
    backgroundColor: '#050d1f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  await storage.init(app);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('load-state', async () => {
  try {
    return await storage.loadState();
  } catch (error) {
    console.error('加载数据失败', error);
    throw error;
  }
});

ipcMain.handle('save-state', async (_event, payload) => {
  try {
    await storage.saveState(payload);
    return { success: true };
  } catch (error) {
    console.error('保存数据失败', error);
    throw error;
  }
});

ipcMain.handle('store-attachments', async (_event, files) => {
  try {
    return await storage.storeAttachments(Array.isArray(files) ? files : []);
  } catch (error) {
    console.error('保存附件失败', error);
    throw error;
  }
});
