console.log('Rock Paper Scissors Game');

const options = ["rock", "paper", "scissors"];
const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const cpuImage = document.querySelector("cpu-img");


let scorePlayer = 0;
let scoreComputer = 0;
let ties = 0;
let round = 1;

let idleIndex = 0;
const idleFrames = ["stone.jpeg", "paper.jpg", "scissors.jpg"];
let idleInterval = setInterval(() => {
    cpuImage.src = idleFrames[idleIndex];
    idleIndex = (idleIndex + 1) % idleFrames.length;
}, 800);

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer chose: ${choice}`);
    return choice;
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
    clearInterval(idleInterval);
    cpuImage.src = `${computerSelection}.png`;

    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "Tie") {
        outcomeDiv.innerText = `Round ${round}:It's a tie!\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else if (result === "Player win") {
        outcomeDiv.innerText = `Round ${round}You win! ${playerSelection} beats ${computerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else {
        outcomeDiv.innerText = `Round ${round}You lose! ${computerSelection} beats ${playerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    }
    round++;
    
}

setTimeout(() => {
    idleInterval = setInterval(() => {
        cpuImage.src = idleFrames[idleIndex];
        idleIndex = (idleIndex + 1) % idleFrames.length;
    }, 800);
}, 2000);



rockbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

paperbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

scissorsbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});