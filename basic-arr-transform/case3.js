import { reduce } from "./function.js";
import chalk from "chalk";
const log = console.log;

function sum(accum, curr) {
  return accum + curr;
}

function sum2(accum, curr) { return accum + curr * curr; }

function sum3(accum, curr) {
  return 0;
}

log(chalk.green("STARTING CASE 3"));
log(chalk.green("==============="), "\n\n");

log(chalk.green("Result...:"), reduce([1, 2, 3, 4], sum, 0), "\n\n");
log(chalk.green("Result...:"), reduce([1, 2, 3, 4], sum2, 100), "\n\n");
log(chalk.green("Result...:"), reduce([], sum3, 25), "\n\n");
