const { json, install } = require('mrm-core');

const packages = [
  // Utilities
  'nsp',
  'del-cli',
  'cross-env',
  'standard-version',

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
  'eslint-config-webpack',
  'lint-staged',
  'pre-commit',
];

module.exports = (config) => {
  json('package.json')
    .merge({
      main: 'dist/cjs.js',
      files: [
        'dist',
      ],
      engines: {
        // Some versions are skipped because of known issues, see https://github.com/webpack-contrib/organization/issues/7
        node: `>= ${config.minNode} < 5.0.0 || >= 5.10`,
      },
      scripts: {
        start: 'yarn run build -- -w',
        prebuild: 'yarn run clean',
        build: "cross-env NODE_ENV=production babel src -d dist --ignore 'src/**/*.test.js'",
        clean: 'del-cli dist',
        lint: 'eslint --cache src test',
        'lint-staged': 'lint-staged',
        prepublish: 'yarn run build',
        release: 'yarn run standard-version',
        security: 'nsp check',
        test: 'jest',
        'test:watch': 'jest --watch',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'travis:lint': 'yarn run lint && yarn run security',
        'travis:test': 'yarn run test',
        'travis:coverage': 'yarn run test:coverage',
      },
      'pre-commit': 'lint-staged',
      'lint-staged': {
        '*.js': ['eslint --fix', 'git add'],
      },
    })
    .save()
  ;

  install(packages);
};
