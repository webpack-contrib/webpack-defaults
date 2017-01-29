const { json } = require('mrm-core');

module.exports = () => {
  json('package.json')
    .merge({
      scripts: {
        test: 'npm run lint',
        lint: 'eslint . --ext .js --fix',
      },
    })
    .save()
  ;
};
