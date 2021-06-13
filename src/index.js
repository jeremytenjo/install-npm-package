const vscode = require('vscode')
const handleInstallNpmPackage = require('../utils/handleNpmPackage')
const pkgJson = require('../package.json')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(`${pkgJson.name} activated!`)

  context.subscriptions.push(
    vscode.commands.registerCommand('installNPMPackage.installNPMPackage', () =>
      handleInstallNpmPackage({ action: 'install' })
    )
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'installNPMPackage.uninstallNPMPackage',
      () => handleInstallNpmPackage({ action: 'uninstall' })
    )
  )
}

// this method is called when your extension is deactivated
function deactivate() {
  console.log(`${pkgJson.name} deactivated!`)
}

module.exports = {
  activate,
  deactivate
}
