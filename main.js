const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;


function startGame() {
  while (!gameOver()) {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    displayScores();
  }

  displayWinner();
  resetScores();
}

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerSelection() {
  let userInput;
  do {
    userInput = prompt("Enter 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
  } while (!options.includes(userInput));
  return userInput;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Draw! Try again.`);
  } else if (
      playerSelection === 'rock' && computerSelection === 'scissors'
      || playerSelection === 'paper' && computerSelection === 'rock'
      || playerSelection === 'scissors' && computerSelection === 'paper'
  ) {
    playerScore++;
    console.log(`You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`);
  }
}

function displayScores() {
  console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
}

function displayWinner() {
  if (playerScore == 3) {
    console.log("\nCONGRATS! You won the game!");
  } else {
    console.log("\nAggghh...The computer won :(");
  }
}

function gameOver() {
  if (playerScore == 3 || computerScore == 3) {
    return true;
  }
  return false;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

