#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number
// 2) Take user input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between (1-10):",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber == randomNumber) {
    console.log("Congratulations! You successfully guessed the correct number.");
}
else {
    console.log("Oops, that's not it");
}
