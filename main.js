// Variables
const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const pScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.btn');
const playerHands = document.querySelector('#player-icons').querySelectorAll('span');
const computerHands = document.querySelector('#computer-icons').querySelectorAll('span');


// Event Listeners
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay(button.id));
  });
});


// Functions
function computerPlay(playerChoice) {
  // Don't allow computer to choose the same choice as the player
  let newOptions = options.filter(choice => choice != playerChoice);
  return newOptions[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {
  clearChoices();
  displayChoices(playerSelection, computerSelection);
  if (checkPlayerWin(playerSelection, computerSelection)) {
    playerScore++;
    results.textContent = `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  } else {
    computerScore++;
    results.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
  }

  if (isGameOver()) {
    updateScores();
    endGame(getGameWinner());
    resetScores();
  } else {
    updateScores();
  }
}

function displayChoices(pChoice, compChoice) {
  playerHands.forEach((icon) => {
    if (icon.classList.contains(pChoice)) {
      icon.classList.add('active');
    }
  });

  computerHands.forEach((icon) => {
    if (icon.classList.contains(compChoice)) {
      icon.classList.add('active');
    }
  })
}

function clearChoices() {
  playerHands.forEach((icon) => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active');
    }
  });

  computerHands.forEach((icon) => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active');
    }
  });
}

function checkPlayerWin(pChoice, compChoice) {
  if (
    pChoice === 'rock' && compChoice === 'scissors'
    || pChoice === 'paper' && compChoice === 'rock'
    || pChoice === 'scissors' && compChoice === 'paper'
  ) {
    return true;
  }
  return false;
}

function isGameOver() {
  if (playerScore == 5 || computerScore == 5) {
    return true;
  }
  return false;
}

function getGameWinner() {
  if (playerScore == 5) {
    return "player";
  } else {
    return "computer";
  }
}

function endGame(winner) {
  if (winner == "player") {
    alert("CONGRATS! You defeated the computer!")
  } else {
    alert("Oh no! The computer won...Let's try again.")
  }

  resetGame();
  updateScores();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  results.textContent = "";
  clearChoices();
}

function updateScores() {
  pScore.textContent = `${playerScore}`;
  compScore.textContent = `${computerScore}`;
}