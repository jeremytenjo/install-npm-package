const vscode = require('vscode');
const pkgJson = require('../package.json');
const handleInstallNpmPackage = require('../utils/handleNpmPackage');
const runGitPush = require('../utils/runGitPush');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(`${pkgJson.name} activated!`);

  context.subscriptions.push(
    vscode.commands.registerCommand('installNPMPackage.installNPMPackage', () =>
      handleInstallNpmPackage({ action: 'install' })
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'installNPMPackage.uninstallNPMPackage',
      () => handleInstallNpmPackage({ action: 'uninstall' })
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('installNPMPackage.runGitPush', () =>
      runGitPush()
    )
  );
}

// this method is called when your extension is deactivated
function deactivate() {
  console.log(`${pkgJson.name} deactivated!`);
}

module.exports = {
  activate,
  deactivate,
};
