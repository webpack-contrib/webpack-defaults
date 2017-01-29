const path = require('path');
const cpFile = require('cp-file');
const chalk = require('chalk');

const files = [
  '.github/ISSUE_TEMPLATE.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
];

module.exports = () => {
  files.forEach((file) => {
    console.log(chalk.green(`Copy ${file}`)); // eslint-disable-line no-console
    cpFile.sync(path.resolve(__dirname, '..', file), file);
  });
};
