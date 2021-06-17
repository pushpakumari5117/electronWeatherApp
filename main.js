const { app,BrowserWindow,globalShortcut,dialog} = require('electron')
const windowStateKeeper=require('electron-window-state')
let win;
function createWindow(){
    win=new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        },
        width:1200,
        height:600
    });
    win.loadFile('index.html');
}
app.whenReady().then(createWindow)