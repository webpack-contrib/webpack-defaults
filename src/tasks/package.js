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
  'memfs',
  'standard-version',
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'commitlint-azure-pipelines-cli',
  'husky',
  'npm-run-all',

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
  'eslint-config-prettier',
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
      name: existing.name || `${packageName}`,
      version: existing.version || '1.0.0',
      description: existing.description || '',
      license: existing.license || 'MIT',
      repository: `${repository}`,
      author: existing.author || `${name}`,
      homepage: `https://github.com/${repository}`,
      bugs: `https://github.com/${repository}/issues`,
      funding: {
        type: 'opencollective',
        url: 'https://opencollective.com/webpack',
      },
      main: existing.main || 'dist/cjs.js',
      engines: {
        node: `>= 10.13.0`,
      },
      scripts: {
        start: 'npm run build -- -w',
        clean: 'del-cli dist',
        prebuild: 'npm run clean',
        build: 'cross-env NODE_ENV=production babel src -d dist --copy-files',
        commitlint: 'commitlint --from=master',
        security: 'npm audit',
        'lint:prettier':
          'prettier "{**/*,*}.{js,json,md,yml,css,ts}" --list-different',
        'lint:js': 'eslint --cache .',
        lint: 'npm-run-all -l -p "lint:**"',
        'test:only': 'cross-env NODE_ENV=test jest',
        'test:watch': 'npm run test:only -- --watch',
        'test:coverage':
          'npm run test:only -- --collectCoverageFrom="src/**/*.js" --coverage',
        pretest: 'npm run lint',
        test: 'npm run test:coverage',
        prepare: 'npm run build',
        release: 'standard-version',
        defaults:
          (existing.scripts && existing.scripts.defaults) || 'webpack-defaults',
      },
      files: existing.files || ['dist/', 'lib/', 'index.js'],
      peerDependencies: existing.peerDependencies || {
        webpack: '^4.0.0 || ^5.0.0',
      },
      dependencies: existing.dependencies || {},
      devDependencies: existing.devDependencies || {},
      keywords: existing.keywords || ['webpack'],
    })
    .save();

  install(packages, { dev: false });
  install(devPackages);
};
