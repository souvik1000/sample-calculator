const path = require("path");
const { app, BrowserWindow } = require("electron");
// const windowStateKeeper = require("electron-window-state");
let win;

function createWindow() {
  // const mainWindowState = windowStateKeeper({
  //   fullScreen: true
  // })
  // Create the browser window.
  win = new BrowserWindow({
    width: 250,
    height: 400,
    show: false,
    maximizable: false,
    fullscreenable: false,
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 20, y: 15 },
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  })
  // win = new BrowserWindow({
  //   x: mainWindowState.x,
  //   y: mainWindowState.y,
  //   width: mainWindowState.width,
  //   height: mainWindowState.height,
  //   webPreferences: { nodeIntegration: true, contextIsolation: false },
  // });

  // win.loadURL('http://localhost:3000/')
  win.loadFile(path.join(__dirname, "../build/index.html"));

  win.on('ready-to-show', () => {
    win.show()
  })

  // win.webContents.openDevTools()
  // mainWindowState.manage(win);
  // app.getPath('userData')
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);