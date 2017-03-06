const { yaml } = require('mrm-core');

module.exports = (config) => {
  // .travis.yml
  yaml('.travis.yml')
    // WARNING: Remove previous values (otherwise could have duplicates like npm run + yarn run on update)
    .set('before_script', [])
    .set('script', [])
    .merge({
      sudo: false,
      language: 'node_js',
      branches: {
        only: [
          'master',
        ],
      },
      matrix: {
        fast_finish: true,
      },
      before_install: [
        'nvm --version',
        'node --version',
      ],
      before_script: [
        `
if [ "$WEBPACK_VERSION" ]; then
  yarn add webpack@^$WEBPACK_VERSION
fi
`.trim(),
        `
if [ "$BITHOUND_CHECK" ]; then
  yarn global add bithound
  bithound check git@github.com:$TRAVIS_REPO_SLUG.git
fi
`.trim(),
      ],
      script: [
        'yarn run travis:$JOB_PART',
      ],
      after_success: [
        'bash <(curl -s https://codecov.io/bash)',
      ],
    })
    // Overwrite
    .set('matrix.include', [
      {
        os: 'linux',
        node_js: '7',
        env: 'WEBPACK_VERSION="2.2.0" BITHOUND_CHECK=true JOB_PART=lint',
      },
      {
        os: 'linux',
        node_js: String(config.minNode),
        env: 'WEBPACK_VERSION="2.2.0" JOB_PART=test',
      },
      {
        os: 'linux',
        node_js: '6',
        env: 'WEBPACK_VERSION="2.2.0" JOB_PART=test',
      },
      {
        os: 'linux',
        node_js: '7',
        env: 'WEBPACK_VERSION="2.2.0" JOB_PART=coverage',
      },
    ])
    .save()
  ;
};
