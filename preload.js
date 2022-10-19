const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('screenshots', {
  screenshot: () => {
    console.log('contextBridge ready')

    ipcRenderer.send('screenshot')
  }
})
