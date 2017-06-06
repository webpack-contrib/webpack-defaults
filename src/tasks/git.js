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
  '.vscode',
  '*.sublime-project',
  '*.sublime-workspace',
];

const gitattributes = [
  'package-lock.json -diff',
  '* text=auto',
  'bin/* eol=lf',
];

module.exports = () => {
  lines('.gitignore')
    .add(gitignore)
    .save()
  ;

  lines('.gitattributes')
    .add(gitattributes)
    .save()
  ;
};
