const { json, install } = require('mrm-core');

const packages = [
  // Utilities
  'del-cli',
  'cross-env',
  'nodemon',
  'nsp',

  // Jest
  'jest',
  'babel-jest',

  // Babel
  'babel-cli',
  'babel-polyfill',
  'babel-preset-webpack',

  // ESLint
  'eslint',
  'eslint-plugin-import',
  'eslint-config-webpack',
  'lint-staged',
  'pre-commit',
];

module.exports = () => {
  json('package.json')
    .merge({
      engines: {
        // Some versions are skipped because of known issues, see https://github.com/webpack-contrib/organization/issues/7
        node: '>=4.3.0 <5.0.0 || >=5.10'
      },
      scripts: {
        prebuild: 'npm run clean:dist',
        build: "cross-env NODE_ENV=production babel -s true src -d dist --ignore 'src/**/*.test.js'",
        'clean:dist': 'del-cli dist',
        start: 'npm run serve:dev src',
        'serve:dev': 'nodemon $2 --exec babel-node',
        lint: 'eslint --cache src test',
        security: 'nsp check',
        test: 'jest',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'travis:test': 'yarn run test',
        'travis:coverage': 'yarn run test:coverage',
        'travis:lint': 'yarn run lint && yarn run nsp',
        'lint-staged': 'lint-staged',
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

