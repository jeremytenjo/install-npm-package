const vscode = require('vscode')

module.exports = async function isUriAFolder(uri) {
  const itemStats = await vscode.workspace.fs.stat(uri)
  const isFolder = itemStats.type === 2

  return isFolder
}
