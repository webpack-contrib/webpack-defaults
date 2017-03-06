const fs = require('fs');
const path = require('path');

// Touch the bin dist file as Node will try to chmod it
// and does not exist when the package is consumed
// through git.
touchDist();

function touchDist() {
  const distPath = path.join(process.cwd(), 'dist', 'index.js');

  fs.closeSync(fs.openSync(distPath, 'w'));
}
