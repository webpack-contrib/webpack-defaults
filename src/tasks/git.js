const { lines } = require('mrm-core');

const gitignore = [
  // Logs
  'logs',
  '*.log',
  'npm-debug.log*',
  '.eslintcache',

  //
  '/coverage',
  '/dist',
  '/local',
  '/reports',
  '/node_modules',

  // Editor & OS
  '.DS_Store',
  'Thumbs.db',
  '.idea',
  '*.iml',
  '.vscode',
  '*.sublime-project',
  '*.sublime-workspace',
];

const gitattributes = [
  '* text=auto',
  'bin/* eol=lf',
  'yarn.lock -diff',
  'package-lock.json -diff',
];

module.exports = () => {
  lines('.gitignore')
    .add(gitignore)
    .save();

  lines('.gitattributes')
    .add(gitattributes)
    .save();
};
