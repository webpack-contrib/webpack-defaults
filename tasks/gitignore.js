const { lines } = require('mrm-core');

const ignores = [
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
  '.vscode',
  '*.sublime-project',
  '*.sublime-workspace',
];

module.exports = () => {
  lines('.gitignore')
    .append(ignores)
    .save()
  ;
};
