// scoreboard

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// game functions/logic

const getElem = (id) => document.getElementById(id);

const computerInput = getElem("computer-guess");
let userInput = getElem("human-guess");
const gameInput = getElem("target-number");

const userScore = getElem("human-score");
const opponentScore = getElem("computer-score");

const userGameText = getElem("guess");
const computerGameText = getElem("computer-wins");

const nextRound = getElem("next-round");

const computerNumber = () => {
  const computerGuess = Math.floor(Math.random() * 9) + 1;
  computerInput.innerText = computerGuess;
  console.log(`Computer number is: ${computerGuess}`);
  return computerGuess;
}

const roundNumber = () => {
  const targetGuess = Math.floor(Math.random() * 9) + 1;
  gameInput.innerText = targetGuess;
  console.log(`Target number is: ${targetGuess}`);
  return targetGuess;
}

const userNumber = () => {
  const humanGuess = userInput.value;
  console.log(`User number is: ${humanGuess}`);
  return humanGuess;
}   

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {

  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  
  userScore.innerText = humanScore;
  opponentScore.innerText = computerScore;

  if (humanDifference < computerDifference) {
    humanScore++
    userGameText.innerHTML = "You win!";
    console.log('Human wins');
  } else if (computerDifference < humanDifference) {
    computerScore++
    computerGameText.innerHTML = "Computer wins!";
    console.log('Computer wins');
  } else if (humanDifference === computerDifference) {
    userGameText.innerHTML = "It's a tie!";
    computerGameText.innerHMTL = "It's a tie!";
    console.log('It\'s a tie');
  }
  return;
}

const game = () => {
  userGameText.removeAttribute("onclick");
  userGameText.setAttribute("disabled", "");

  const humanGuess = userNumber();
  const computerGuess = computerNumber();
  const targetGuess = roundNumber();

  compareGuesses(humanGuess, computerGuess, targetGuess);

  nextRound.removeAttribute("disabled");
  return;
}

// next turn function

const nextTurn = () => {
  
}

// number control buttons ( +  - )

const add = getElem("add");
const subtract = getElem("subtract");

add.addEventListener('click', () => userInput.value < 9 ? userInput.value++ : null);
subtract.addEventListener('click', () => userInput.value > 0 ? userInput.value-- : null);

