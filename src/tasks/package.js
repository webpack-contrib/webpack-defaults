/* eslint-disable no-template-curly-in-string */
const path = require('path');
const meta = require('user-meta');
const gitUsername = require('git-username');
const { json, install } = require('mrm-core');

const packages = ['@webpack-contrib/schema-utils', 'loader-utils'];

const devPackages = [
  // Utilities
  'nsp',
  'del',
  'del-cli',
  'cross-env',
  'memory-fs',
  'standard-version',
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'conventional-github-releaser',
  'husky',

  // Jest
  'jest',
  'babel-jest',

  // Babel
  'babel-cli',
  'babel-polyfill',
  'babel-preset-env',
  'babel-plugin-transform-object-rest-spread',

  // ESLint
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  '@webpack-contrib/eslint-config-webpack',
  'lint-staged',
  'pre-commit',
  'prettier',

  // Webpack
  'webpack',
];

module.exports = (config) => {
  const { name } = meta;
  const github = gitUsername();
  const packageName = path.basename(process.cwd());
  const repository = `${github}/${packageName}`;

  const file = json('package.json');
  const existing = file.get();

  json('package.json')
    .set({
      name: `${packageName}`,
      version: existing.version || '1.0.0',
      description: existing.description || '',
      license: existing.license || 'MIT',
      repository: `${repository}`,
      author: existing.author || `${name}`,
      homepage: `https://github.com/${repository}`,
      bugs: `https://github.com/${repository}/issues`,
      bin: existing.bin || '',
      main: existing.main || 'dist/cjs.js',
      engines: {
        node: `>= ${config.maintLTS} <7.0.0 || >= ${config.activeLTS}`,
      },
      scripts: {
        start: 'npm run build -- -w',
        build:
          "cross-env NODE_ENV=production babel src -d dist --ignore 'src/**/*.test.js' --copy-files",
        clean: 'del-cli dist',
        commitlint: 'commitlint',
        commitmsg: 'commitlint -e $GIT_PARAMS',
        lint: 'eslint --cache src test',
        'ci:lint:commits':
          'commitlint --from=${CIRCLE_BRANCH} --to=${CIRCLE_SHA1}',
        'lint-staged': 'lint-staged',
        prebuild: 'npm run clean',
        prepublish: 'npm run build',
        release: 'standard-version',
        'release:ci': 'conventional-github-releaser -p angular',
        'release:validate':
          'commitlint --from=$(git describe --tags --abbrev=0) --to=$(git rev-parse HEAD)',
        security: 'nsp check',
        test: 'jest',
        'test:watch': 'jest --watch',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'ci:lint': 'npm run lint && npm run security',
        'ci:test': 'npm run test -- --runInBand',
        'ci:coverage': 'npm run test:coverage -- --runInBand',
        defaults: 'webpack-defaults',
      },
      files: existing.files || ['dist/', 'lib/', 'index.js'],
      peerDependencies: existing.peerDependencies || { webpack: '^4.3.0' },
      dependencies: existing.dependencies || {},
      devDependencies: existing.devDependencies || {},
      keywords: existing.keywords || ['webpack'],
      'pre-commit': 'lint-staged',
      'lint-staged': {
        '*.js': ['eslint --fix', 'git add'],
      },
    })
    .save();
  install(packages, { dev: false });
  install(devPackages);
};
