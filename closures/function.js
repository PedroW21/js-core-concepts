import chalk from "chalk";
const log = console.log;

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = function (init) {
  let initialValue = init;
  function increment() {
    log(chalk.hex("#ff4d00").bold("Incrementing counter"));

    return ++init;
  }

  function decrement() {
    log(chalk.red("Decrementing counter"));
    return --init;
  }

  function reset() {
    log(chalk.blue("Resetting counter to initial value"));
    init = initialValue;
    return init;
  }

  return { increment, decrement, reset };
};

export default createCounter;