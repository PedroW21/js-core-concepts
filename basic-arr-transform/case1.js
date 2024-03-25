import { map } from "./function.js";
import chalk from "chalk";
const log = console.log;

function plusone(n) {
  return n + 1;
}
function plusI(n, i) {
  return n + i;
}
function constant(n, i) {
  return 42;
}

log(chalk.green("STARTING CASE 1"));
log(chalk.green("==============="), "\n\n");

log(chalk.green("Result...:"), map([1, 2, 3], plusone), "\n\n");
log(chalk.green("Result...:"), map([1, 2, 3], plusI), "\n\n");
log(chalk.green("Result...:"), map([10, 20, 30], constant), "\n\n");
