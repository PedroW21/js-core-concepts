import { filter } from "./function.js";
import chalk from "chalk";
const log = console.log;

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

log(chalk.green("STARTING CASE 2"));
log(chalk.green("==============="), "\n\n");

log(chalk.green("Result...:"), filter([0, 10, 20, 30], greaterThan10), "\n\n");
log(chalk.green("Result...:"), filter([1, 2, 3], firstIndex), "\n\n");
log(chalk.green("Result...:"), filter([-2, -1, 0, 1, 2], plusOne), "\n\n");
