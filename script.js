console.log('Rock Paper Scissors Game');
console.log('I made this game based on the project on Odin Project but i just like this more so i trying to improve it.');

const options = ["rock", "paper", "scissors"];
const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const cpuImage = document.querySelector('#cpu-img'); 
const playAgainButton = document.querySelector('.play-again');

let scorePlayer = 0;
let scoreComputer = 0;
let ties = 0;
let round = 1;

const cpuImages = {
    idle: "monitor.png",
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png"
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

function changeCpu(newChoice) {
    cpuImage.src = cpuImages[newChoice];
    cpuImage.classList.add('jump');
    setTimeout(() => cpuImage.classList.remove('jump'), 300);
}

function playRound(playerSelection, computerSelection) {
    changeCpu(computerSelection);
    
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "Tie") {
        outcomeDiv.innerText = `Round ${round} :It's a tie!\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else if (result === "Player win") {
        outcomeDiv.innerText = `Round ${round} You win! ${playerSelection} beats ${computerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    } else {
        outcomeDiv.innerText = `Round ${round} You lose! ${computerSelection} beats ${playerSelection}\nPlayer: ${scorePlayer} | Computer: ${scoreComputer} | Ties: ${ties}`;
    }
    
    disableButtons();
    playAgainButton.classList.add("show");
}

setTimeout(() => {
    cpuImage.src = cpuImages.idle;
}, 2000);

function disableButtons() {
    rockbutton.disabled = true;
    paperbutton.disabled = true
    scissorsbutton.disabled = true;
}

function enableButtons() {
    rockbutton.disabled = false;
    paperbutton.disabled = false;
    scissorsbutton.disabled = false;
}

playAgainButton.addEventListener("click", () => {
    round++;
    changeCpu('idle');
    enableButtons();
    playAgainButton.classList.remove("show");
});

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