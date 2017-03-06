/* eslint-disable */
// adapted based on rackt/history (MIT)
// Node 4+
const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const defaultsName = 'webpack-defaults';
const distDirectory = 'dist';

writeScript();
writeDist();

function writeScript() {
  // Check if project **package.json** isn't the webpack-defaults
  // itself and does not contain the shortcut.
  // XXX: This will fail with nested node_modules. Pick till last instead?
  const pkgFile = path.join(
    path.join(process.cwd(), 'package.json').split('node_modules')[0],
    'package.json'
  );
  const pkg = require(pkgFile);

  if (pkg.name === defaultsName || (pkg.scripts && pkg.scripts[defaultsName])) {
    return;
  }

  // Write initial scripts structure if they don't exist already.
  pkg.scripts = pkg.scripts || {};

  pkg.scripts[defaultsName] = defaultsName;

  fs.writeFileSync(
    pkgFile,
    JSON.stringify(pkg, null, 2)
  );
}

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
