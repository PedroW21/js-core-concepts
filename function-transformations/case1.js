import { compose } from "./function.js";
import chalk from "chalk";
const log = console.log;

log(chalk.green("STARTING CASE 1"));
log(chalk.green("==============="), "\n\n");

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
let functions3 = [];

let case1 = compose(functions);
log(chalk.green("Result...:"), case1(4), "\n\n");
// log(chalk.green("Result...:"), map([1, 2, 3], plusI), "\n\n");
// log(chalk.green("Result...:"), map([10, 20, 30], constant), "\n\n");
