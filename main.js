const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

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
    return `Draw! Try again.`;
  } else if (
      playerSelection === 'rock' && computerSelection === 'scissors'
      || playerSelection === 'paper' && computerSelection === 'rock'
      || playerSelection === 'scissors' && computerSelection === 'paper'
  ) {
    playerScore++;
    return `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function startGame() {
  while (playerScore != 3 && computerScore != 3) {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
  }
  if (playerScore == 3) {
    console.log("\nCONGRATS! You won the game!")
    resetScores();
  }  else {
    console.log("\nAgghh...Computer wins.")
    resetScores();
  }
}