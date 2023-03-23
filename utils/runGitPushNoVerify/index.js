const vscode = require('vscode');

module.exports = async function runGitPushNoVerify() {
  const terminal = vscode.window.createTerminal({
    name: `Run Git Push No Verify`,
  });

  terminal.show();
  terminal.sendText(`git push --no-verify`);
};
