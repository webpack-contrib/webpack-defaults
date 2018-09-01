/* eslint-disable */
const path = require('path');
const json = require('mrm-core').json;

const localDir = process.cwd()
  .split('node_modules')
  .shift();

// Create webpack-defaults in package.json
// if it doesn’t exist
function writeScript() {
  const pkg = json(path.resolve(localDir, 'package.json'));

  const script = ['scripts', 'defaults'];

  if (!pkg.get(script)) {
    pkg
      .set(script, 'webpack-defaults')
      .save();
  }
}

writeScript()
