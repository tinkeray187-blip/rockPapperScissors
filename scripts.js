// Rock Paper Scissors
// A simple game of Rock, Paper, Scissors
// made to be played in the console written in JavaScript
//
// Author: Tink187
// Date: 10/16/2025

console.log("Rock, Paper, Scissors");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Hydrochloric Acid";
    } else if (computerChoice === 1) {
        return "Galvanized Steel";
    } else {
        return "Glass Jar";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = window.prompt("Please pick a choice: Hydrochloric Acid, Galvanized Steel, or Glass Jar");
    if (humanChoice === "Hydrocloric Acid") {
        return "Hydrochloric Acid";
    } else if (humanChoice === "Galvanized Steel") {
        return "Galvanized Steel";
    } else {
        return "Glass Jar";
    }
}
}