import createCounter from "./function.js";
import chalk from "chalk";
const log = console.log;

log(chalk.green("STARTING CASE 3"));
log(chalk.green("==============="), "\n\n");

const counter1 = createCounter(-5);
log(chalk.green("Result...:"), counter1.decrement(), "\n\n");
log(chalk.green("Result...:"), counter1.decrement(), "\n\n");
log(chalk.green("Result...:"), counter1.decrement(), "\n\n");
log(chalk.green("Result...:"), counter1.decrement(), "\n\n");

log("Expected...:", [-6, -7, -8, -9], "\n\n");