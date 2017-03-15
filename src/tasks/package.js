const { json, install } = require('mrm-core');

const packages = [
  // Utilities
  'del-cli',
  'cross-env',
  'nodemon',
  'nsp',
  'standard-version',

  // Jest
  'jest',
  'babel-jest',

  // Babel
  'babel-cli',
  'babel-polyfill',
  'babel-preset-env',

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
      engines: {
        // Some versions are skipped because of known issues, see https://github.com/webpack-contrib/organization/issues/7
        node: `>=${config.minNode} <5.0.0 || >=5.10`,
      },
      scripts: {
        start: 'yarn run serve:dev src',
        build: "cross-env NODE_ENV=production babel -s true src -d dist --ignore 'src/**/*.test.js'",
        'clean:dist': 'del-cli dist',
        lint: 'eslint --cache src test',
        'lint-staged': 'lint-staged',
        prebuild: 'yarn run clean:dist',
        prepublish: 'yarn run build',
        release: 'yarn run standard-version',
        security: 'nsp check',
        'serve:dev': 'nodemon $2 --exec babel-node',
        test: 'jest',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'travis:coverage': 'yarn run test:coverage',
        'travis:lint': 'yarn run lint && yarn run security',
        'travis:test': 'yarn run test',
      },
      main: 'dist/cjs.js',
      files: [
        'dist',
      ],
      'pre-commit': 'lint-staged',
      'lint-staged': {
        '*.js': ['eslint --fix', 'git add'],
      },
    })
    .save()
  ;

  install(packages);
};
