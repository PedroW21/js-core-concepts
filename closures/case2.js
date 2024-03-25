import createCounter from "./function.js";
import chalk from "chalk";
const log = console.log;

log(chalk.green("STARTING CASE 2"));
log(chalk.green("==============="), "\n\n");

const counter2 = createCounter(0);
log(chalk.green("Result...:"), counter2.increment(), "\n\n");
log(chalk.green("Result...:"), counter2.increment(), "\n\n");
log(chalk.green("Result...:"), counter2.decrement(), "\n\n");
log(chalk.green("Result...:"), counter2.reset(), "\n\n");
log(chalk.green("Result...:"), counter2.reset(), "\n\n");

log("Expected...:", [1, 2, 1, 0, 0], "\n\n");
