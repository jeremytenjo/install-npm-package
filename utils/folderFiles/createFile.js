const vscode = require('vscode')

const createUri = require('./createUri')

module.exports = async function createFile(outputPath, content) {
  const writeData = Buffer.from(content, 'utf8')
  const folderUri = createUri(outputPath)

  await vscode.workspace.fs.writeFile(folderUri, writeData)
}
