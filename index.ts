#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// 1) Computer will generate random number

// 2) Take user input for guessing number

// 3) Compare user input with computer generated number and show result


console.log(chalk.bold.bgWhiteBright.hex('#FF69B4')("Welcome to the Number Guessing Game!"));
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    message: chalk.yellowBright("Please guess a number between (1-10):"),
    type: "number",
    name: "userGuessedNumber",
  },
]);

if(answer.userGuessedNumber == randomNumber){
    console.log(chalk.green("Congratulations! You successfully guessed the correct number."));
}
else{
    console.log(chalk.red("Oops, that's not it"));
}