const { app, BrowserWindow, ipcMain } = require('electron')
const { Screenshots } = require('node-screenshots')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  ipcMain.on('screenshot', () => {
    const screens = Screenshots.all()
    screens.forEach(item => {
      console.log(item.id)
      console.log(item.isPrimary)
      console.log(item.width)
      console.log(item.height)
      console.log(item.scaleFactor)
      console.log(item.rotation)
      
      item.captureSync()
    })
  })
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
