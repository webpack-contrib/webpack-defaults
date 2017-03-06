/* eslint-disable */
// adapted based on rackt/history (MIT)
// Node 4+
const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const json = require('mrm-core').json;

const defaultsName = 'webpack-defaults';
const distDirectory = 'dist';
const localDir = process.cwd().split('node_modules').shift();

writeScript();
writeDist();

// Create webpack-defaults in package.json if it doesn’t exist
function writeScript() {
  const pkg = json(path.resolve(localDir, 'package.json'));
  const scriptPath = ['scripts', defaultsName];
  if (!pkg.get(scriptPath)) {
    pkg
      .set(scriptPath, defaultsName)
      .save();
  }
}

// Compile sources in case of installation from Git
function writeDist() {
  fs.stat(distDirectory, function(error, stat) {
    // Skip building on Travis
    if (process.env.TRAVIS) {
      return;
    }

    if (error || !stat.isDirectory()) {
      // Create a directory to avoid getting stuck
      // in postinstall loop
      fs.mkdirSync(distDirectory);
      exec('npm install --only=dev');
      exec('npm run build');
    }
  });
}

function exec(command) {
  execSync(command, {
    // Print stdin/stdout/stderr
    stdio: 'inherit'
  });
}
