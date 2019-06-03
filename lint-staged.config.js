module.exports = {
  ignore: [
    'package-lock.json',
    'CHANGELOG.md',
    'templates/.github/ISSUE_TEMPLATE/BUG.md',
    'templates/.github/ISSUE_TEMPLATE/FEATURE.md',
    'templates/.github/ISSUE_TEMPLATE/MODIFICATION.md',
    'templates/README.m',
  ],
  linters: {
    '*.js': ['prettier --write', 'eslint --fix', 'git add'],
    '*.{json,md,yml,css}': ['prettier --write', 'git add'],
  },
};
