const vscode = require('vscode')

module.exports = function createUri(uri) {
  const folderUri = vscode.workspace.workspaceFolders[0].uri
  const fileUri = folderUri.with({
    path: uri
  })

  return fileUri
}
