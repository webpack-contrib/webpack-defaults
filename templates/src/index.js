const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const schema = require('./options.json');

function loader(source) {
  const options = Object.assign({}, getOptions(this));

  validateOptions(schema, options, 'Loader Name');

  const result = `export default ${source}`;

  return result;
}

module.exports = loader
