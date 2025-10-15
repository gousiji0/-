const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  loadState: () => ipcRenderer.invoke('load-state'),
  saveState: (payload) => ipcRenderer.invoke('save-state', payload),
  storeAttachments: (files) => ipcRenderer.invoke('store-attachments', files)
});
