const path = require('path');

const { json } = require('mrm-core');

const defaultsName = 'defaults';
const isWin = process.platform === 'win32';
const localDir = process
  .cwd()
  .split('node_modules')
  .shift();
const pkg = json(path.resolve(localDir, 'package.json'));
const scriptPath = ['scripts', defaultsName];

if (isWin && !pkg.get(scriptPath)) {
  pkg.set(scriptPath, 'webpack-defaults').save();
}
