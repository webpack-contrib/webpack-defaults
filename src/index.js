#!/usr/bin/env node

/* eslint-disable no-console, global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

module.exports = function webpackDefaults() {
  console.log(chalk.cyan.bold('Synchronizing config files...'));

  const tasks = fs
    .readdirSync(path.resolve(__dirname, 'tasks'))
    .filter((item) => path.extname(item) === '.js');

  tasks.forEach((task) => {
    const module = require(`./tasks/${task}`);

    module();
  });

  console.log();
  console.log('Done. Happy webpacking!');
  console.log();
};
