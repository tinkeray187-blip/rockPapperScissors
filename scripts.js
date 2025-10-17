// Rock Paper Scissors
// A simple game of Rock, Paper, Scissors with a twist
// made to be played in the console written in JavaScript
//
// Author: Tink187
// Date: 10/16/2025

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "Acid";
    if (computerChoice === 1) return "Steel";
    return "Glass Jar";
}

function getHumanChoice() {
    let humanChoice = window.prompt("Please pick a choice:Acid, Steel, or Glass Jar");
    if (!humanChoice) return "Glass Jar";
    humanChoice = humanChoice.trim().toLowerCase();
    if (humanChoice === "acid") return "Acid";
    if (humanChoice === "steel") return "Steel";
    return "Glass Jar";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();

        if (human === computer) {
            console.log("It's a tie!");
            return;
        }

        if (
            (human === "steel" && computer === "glass jar") ||
            (human === "glass jar" && computer === "acid") ||
            (human === "acid" && computer === "steel")
        ) {
            humanScore++;
            console.log(`You win! You little devil you! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! You are inferior to machines Weakling! ${computerChoice} beats ${humanChoice} Stupid Human`);
        }

        console.log(`Current Score => Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- Round ${i} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }

    // Final results after 5 rounds
    console.log("\n----- Final Results -----");
    if (humanScore > computerScore) {
        console.log(`You have proved yourself worthy! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Machines will rule humanity! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`something went wrong, there can be only one winner! ${humanScore} to ${computerScore}`);
    }
}

playGame();