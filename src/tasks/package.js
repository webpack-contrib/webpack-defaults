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

  // Webpack
  'webpack',
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
      peerDependencies: {
        webpack: '^2.0.0 || ^3.0.0',
      },
      scripts: {
        start: 'npm run build -- -w',
        'appveyor:test': 'npm run test',
        build: "cross-env NODE_ENV=production babel src -d dist --ignore 'src/**/*.test.js'",
        clean: 'del-cli dist',
        lint: 'eslint --cache src test',
        'lint-staged': 'lint-staged',
        prebuild: 'npm run clean',
        prepublish: 'npm run build',
        release: 'standard-version',
        security: 'nsp check',
        test: 'jest',
        'test:watch': 'jest --watch',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'travis:lint': 'npm run lint && npm run security',
        'travis:test': 'npm run test -- --runInBand',
        'travis:coverage': 'npm run test:coverage -- --runInBand',
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
