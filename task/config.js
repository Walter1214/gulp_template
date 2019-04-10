const chalk = require('chalk');

const devStr = `
    ########  ######## ##     ##
    ##     ## ##       ##     ##
    ##     ## ##       ##     ##
    ##     ## ######   ##     ##
    ##     ## ##        ##   ##
    ##     ## ##         ## ##
    ########  ########    ###
    `;
const proStr = `
    ########  ########   #######
    ##     ## ##     ## ##     ##
    ##     ## ##     ## ##     ##
    ########  ########  ##     ##
    ##        ##   ##   ##     ##
    ##        ##    ##  ##     ##
    ##        ##     ##  #######   `;
function logDevelopment(str) {
  console.log(chalk.black.bgYellow(str));
}
function logProduction(str) {
  console.log(chalk.bgCyan.white.bold(str));
}
module.exports = {
  DEV_MODE: false,
  setDevMode(mode) {
    this.DEV_MODE = mode;
    this.log(this.DEV_MODE ? devStr : proStr);
  },
  log(value) {
    if (this.DEV_MODE) {
      logDevelopment(value);
    } else {
      logProduction(value);
    }
  },
};
