#!/usr/bin/env node

/* eslint-disable no-console, global-require, import/no-dynamic-require */

const chalk = require('chalk');
const config = require('../config.json');

module.exports = function webpackDefaults() {
  console.log(chalk.cyan.bold('Synchronizing config files...'));

  config.tasks.forEach((task) => {
    const module = require(`./tasks/${task}`);
    module(config);
  });

  console.log();
  console.log('Done. Happy webpacking!');
  console.log();
};
