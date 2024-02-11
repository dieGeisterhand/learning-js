const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === `rock` ||
    userInput === `paper` ||
    userInput === `scissors` ||
    userInput === `bomb`
  ) {
    return userInput;
  } else {
    return null;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    return `rock`;
  } else if (randomNumber === 1) {
    return `paper`;
  } else if (randomNumber === 2) {
    return `scissors`;
  } else if (randomNumber === 3) {
    return `bomb`;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === `rock`) {
    if (computerChoice === `paper`) {
      return `you lose`;
    } else if (computerChoice === `scissors`) {
      return `you win`;
    } else if (userChoice === computerChoice) {
      return `tie`;
    }
  }

  if (userChoice === `paper`) {
    if (computerChoice === `rock`) {
      return `you win`;
    } else if (computerChoice === `scissors`) {
      return `you lose`;
    } else if (userChoice === computerChoice) {
      return `tie`;
    }
  }

  if (userChoice === `scissors`) {
    if (computerChoice === `rock`) {
      return `you lose`;
    } else if (computerChoice === `paper`) {
      return `you win`;
    } else if (userChoice === computerChoice) {
      return `tie`;
    }
  }

  if (userChoice !== `bomb` && computerChoice === `bomb`){
    return `you lose`
  } else if (computerChoice === "bomb" && userChoice === "bomb") {
    return `everyone loses`;
  } else if (userChoice === "bomb") {
  return `you win`;
} 
};

const userChoice = getUserChoice("rock"); // enter user input

if (userChoice === null) {
  console.log(`entry not valid.\nyou can choose from rock, paper or scissors.\ntry again.`)
} else {
  const computerChoice = getComputerChoice();

  console.log("User Choice:", userChoice);
  console.log("Computer Choice:", computerChoice);

  const playGame = determineWinner(userChoice, computerChoice);
  console.log("Result:", playGame);
}

