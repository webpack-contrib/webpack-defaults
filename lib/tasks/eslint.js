const { lines } = require('mrm-core');

module.exports = () => {
  // .eslintignore
  lines('.eslintignore')
    .add(['/node_modules', '/dist'])
    .save();
};
