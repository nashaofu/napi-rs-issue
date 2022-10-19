const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('app', {
  run: () => {
    console.log('contextBridge ready')

    ipcRenderer.send('run')
  }
})
