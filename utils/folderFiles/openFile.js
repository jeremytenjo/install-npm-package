const vscode = require('vscode')

const createUri = require('./createUri')

module.exports = function openFile(filePath) {
  const folderUri = createUri(filePath)
  vscode.window.showTextDocument(folderUri)
}
