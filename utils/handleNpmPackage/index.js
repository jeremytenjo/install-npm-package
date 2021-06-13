const vscode = require('vscode')
const capitalize = require('../string/capitalize')

module.exports = async function handleNpmPackage({ action = 'install' } = {}) {
  const actionUppercased = capitalize(action)
  const npmPackageToInstall = await vscode.window.showInputBox({
    value: '',
    title: `${actionUppercased} NPM Package`,
    placeHolder: 'Package name',
    validateInput: (value) => {
      if (value === '') return 'Missing package name'
    }
  })

  if (!npmPackageToInstall) return

  const terminal = vscode.window.createTerminal({
    name: `${actionUppercased} NPM package`
  })

  terminal.show()
  terminal.sendText(`npm ${action} ${npmPackageToInstall}`)
}
