console.log('Rock Paper Scissors Game');

const options = ["rock", "paper", "scissors"];
const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const cpuImage = document.querySelector("#cpu-img");


let scorePlayer = 0;
let scoreComputer = 0;
let ties = 0;
let round = 1;

const cpuImages = {
    idle: "monitor.jpg",
    rock: "stone.jpeg",
    paper: "paper.jpg",
    scissors: "scissors.jpg"
};

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ties++;
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        scorePlayer++;
        return "Player win";
    } else {
        scoreComputer++;
        return "Computer Win";
    }
}

function playRound(playerSelection, computerSelection) {
    cpuImage.src = cpuImages[computerSelection];
    
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "Tie") {
        outcomeDiv.innerText = `Round ${round} :It's a tie!\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else if (result === "Player win") {
        outcomeDiv.innerText = `Round ${round} You win! ${playerSelection} beats ${computerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else {
        outcomeDiv.innerText = `Round ${round} You lose! ${computerSelection} beats ${playerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    }
    round++;
    
}

setTimeout(() => {
    cpuImage.src = cpuImages.idle;
}, 2000);



rockbutton.addEventListener('click', () => {
    const cpu = getComputerChoice();
    playRound("rock", cpu);
});

paperbutton.addEventListener('click', () => {
    const cpu = getComputerChoice();
    playRound("paper", cpu);
});

scissorsbutton.addEventListener('click', () => {
    const cpu = getComputerChoice();
    playRound("scissors", cpu);
});