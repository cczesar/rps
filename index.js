console.log("Rock Paper Scissors Game");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[(Math.random() * options.lenght)];
}


getComputerChoice();