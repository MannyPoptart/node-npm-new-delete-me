// Node API
console.log('Manny Aguilera');

// Import chalk

// ES6
import chalk from 'chalk';
// Common JS
// const chalk = require('chalk');

const log = console.log;

log(chalk.blue.bgYellow.bold('Hello world!'));

import figlet from 'figlet';

figlet("Teehee!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });