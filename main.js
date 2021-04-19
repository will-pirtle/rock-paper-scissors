const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const pScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());if (playerSelection === computerSelection) {
      results.textContent = `Draw! Try again.`;
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
      playerScore++;
      results.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else {
      computerScore++;
      results.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    }
  });
});

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = `Draw! Try again.`;
  } else if (
      playerSelection === 'rock' && computerSelection === 'scissors'
      || playerSelection === 'paper' && computerSelection === 'rock'
      || playerSelection === 'scissors' && computerSelection === 'paper'
  ) {
    playerScore++;
    results.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  } else {
    computerScore++;
    results.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
  }

  updateScores();
}

function updateScores() {
  pScore.textContent = `${playerScore}`;
  compScore.textContent = `${computerScore}`;
}

function displayWinner() {
  if (playerScore == 3) {
    console.log("\nCONGRATS! You won the game!");
  } else {
    console.log("\nAggghh...The computer won :(");
  }
}

function gameOver() {
  if (playerScore == 5 || computerScore == 5) {
    return true;
  }
  return false;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}