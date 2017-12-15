/* eslint-disable no-template-curly-in-string */
const { json, install } = require('mrm-core');

const pacakges = ['schema-utils'];

const devPackages = [
  // Utilities
  'nsp',
  'del',
  'del-cli',
  'cross-env',
  'memory-fs',
  'standard-version',
  '@commitlint/cli',
  '@commitlint/config-angular',
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
  json('package.json')
    .merge({
      main: 'dist/cjs.js',
      files: ['dist'],
      engines: {
        node: `>= ${config.minNode} || >= ${config.latestNodeLTS}`,
      },
      peerDependencies: {
        webpack: '^3.0.0 || ^4.0.0',
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
      },
      'pre-commit': 'lint-staged',
      'lint-staged': {
        '*.js': ['eslint --fix', 'git add'],
      },
    })
    .save();
  install(pacakges, { dev: false });
  install(devPackages);
};
