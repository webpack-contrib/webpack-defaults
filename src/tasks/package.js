/* eslint-disable no-template-curly-in-string */
const path = require('path');

const meta = require('user-meta');
const gitUsername = require('git-username');
const { json, install } = require('mrm-core');

const packages = ['schema-utils', 'loader-utils'];

const devPackages = [
  // Utilities
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
  '@babel/cli',
  '@babel/polyfill',
  '@babel/core',
  '@babel/preset-env',

  // ESLint
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'lint-staged',
  'pre-commit',
  'prettier',

  // Webpack
  'webpack',

  // Webpack Contrib
  '@webpack-contrib/defaults',
  '@webpack-contrib/eslint-config-webpack',
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
        security: 'npm audit',
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
      babel: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: config.maintLTS,
              },
              useBuiltIns: 'usage',
            },
          ],
        ],
      },
      jest: { testEnvironment: 'node' },
      'lint-staged': {
        '*.js': ['eslint --fix', 'git add'],
      },
      husky: {
        hooks: {
          'pre-commit': 'lint-staged',
        },
      },
      commitlint: {
        extends: ['@commitlint/config-conventional'],
      },
    })
    .save();
  install(packages, { dev: false });
  install(devPackages);
  // Require for `jest`
  install({ 'babel-core': '^7.0.0-bridge.0' });
};
