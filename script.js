let playerScore = 0;
let compScore = 0;

const computerPlay = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = choices[randomNum];
  return compChoice;
};

const playRound = (playerSection, computerSection) => {
  if (playerSection === "Rock" && computerSelection === "Rock") {
    return "You both picked rock";
  } else if (playerSection === "Paper" && computerSelection === "Paper") {
    return "You both picked paper";
  } else if (playerSection === "Scissors" && computerSelection === "Scissors") {
    return "You both picked Scissors";
  } else if (playerSection === "Scissors" && computerSelection === "Rock") {
    compScore++;
    return "You lost";
  } else if (playerSection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You won";
  } else if (playerSection === "Rock" && computerSelection === "Paper") {
    compScore++;
    return "You lost";
  } else if (playerSection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You won";
  } else if (playerSection === "Paper" && computerSelection === "Scissors") {
    compScore++;
    return "You lost";
  } else if (playerSection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return "You won";
  }
};


const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Try your best",
      "Rock, Paper, Scissors"
    ).toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > compScore) {
    return 'You beat a computer';
  } else if (playerScore < compScore) {
    return 'Computer won';
  } else {
    return 'Nobody won';
  }
};

console.log(game());
