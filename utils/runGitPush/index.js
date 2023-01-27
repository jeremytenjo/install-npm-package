const vscode = require('vscode');

module.exports = async function runGitPush() {
  const terminal = vscode.window.createTerminal({
    name: `Run Git Push`,
  });

  terminal.show();
  terminal.sendText(`git push`);
};
