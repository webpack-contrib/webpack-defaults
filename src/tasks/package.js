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
  'commitlint-azure-pipelines-cli',
  'husky',

  // Jest
  'jest',
  'jest-junit',
  'babel-jest',

  // Babel
  '@babel/cli',
  '@babel/core',
  '@babel/preset-env',

  // ESLint
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'lint-staged',
  'prettier',

  // Webpack
  'webpack',

  // Webpack Contrib
  '@webpack-contrib/defaults',
  '@webpack-contrib/eslint-config-webpack',
];

module.exports = () => {
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
      main: existing.main || 'dist/cjs.js',
      engines: {
        node: `>= 6.9.0`,
      },
      scripts: {
        start: 'npm run build -- -w',
        prebuild: 'npm run clean',
        build:
          "cross-env NODE_ENV=production babel src -d dist --ignore 'src/**/*.test.js' --copy-files",
        clean: 'del-cli dist',
        commitlint: 'commitlint --from=master',
        lint: 'eslint --cache src test',
        prepare: 'npm run build',
        release: 'standard-version',
        security: 'npm audit',
        'test:only': 'jest',
        'test:watch': 'jest --watch',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        pretest: 'npm run lint',
        test: 'npm run test:coverage',
        defaults: existing.scripts.defaults || 'webpack-defaults',
      },
      files: existing.files || ['dist/', 'lib/', 'index.js'],
      peerDependencies: existing.peerDependencies || { webpack: '^4.0.0' },
      dependencies: existing.dependencies || {},
      devDependencies: existing.devDependencies || {},
      keywords: existing.keywords || ['webpack'],
    })
    .save();

  install(packages, { dev: false });
  install(devPackages);
};
