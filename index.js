console.log('Rock Paper Scissors Game');

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer chose: ${choice}`);
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player win";
    } else {
        return "Computer Win";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a tie!";
    } else if (result === "Player win") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validInput = false;
    let choice;
    while (!validInput) {
        choice = prompt("rock, paper, or scissors:").trim().toLowerCase();
        if (options.includes(choice)) {
            validInput = true; 
        } else {
            console.log("Invalid input. Please choose rock, paper, or scissors.");
        }
    }
    return choice; 
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    let ties = 0;

    console.log("Welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        const result = checkWinner(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------------");
        if (result === "Player win") {
            scorePlayer++;
        } else if (result === "Computer Win") {
            scoreComputer++;
        } else if (result === "Tie") {
            ties++;
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("You win!");
    } else if (scorePlayer < scoreComputer) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }

    console.log(`Player score: ${scorePlayer}`);
    console.log(`Computer score: ${scoreComputer}`);
    console.log(`Ties: ${ties}`);
}
game();