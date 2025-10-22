function getComputerChoice() {
  let choice;
  let numberChoice = Math.floor(Math.random() * 3) + 1;
  if (numberChoice === 1) {
    choice = "rock";
  } else if (numberChoice === 2) {
    choice = "paper";
  } else {
    choice = "scissor";
  }

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let count = 1;
  let buttons = document.querySelector(".container");
  let resultDiv = document.querySelector(".result");
  let displayHuman = document.querySelector("#human");
  let humanPoints = document.querySelector("#human-score");
  let displayComputer = document.querySelector("#computer");
  let computerPoints = document.querySelector("#computer-score");
  let round = document.querySelector("#round");
  let winnerText = document.querySelector("#winner");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "paper") {
      alert("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      alert("You got it! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      alert("Unluckey! Rock beats Scissor");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      alert("Walla! You got it right!, Rock beats Scissor");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      alert("You are out of luck, Scissor beats paper");
      computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      alert("You really cracked it! Scissor beats Paper");
      humanScore++;
    } else {
      alert("Tie!");
    }
  }
  buttons.addEventListener("click", (e) => {
    winnerText.textContent = "Winner: ";
    let target = e.target;
    let humanChoice = target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayHuman.textContent = `Human: ${target.id}`;
    humanPoints.textContent = `Human Points: ${humanScore}`;
    displayComputer.textContent = `Computer: ${computerChoice}`;
    computerPoints.textContent = `Computer Points: ${computerScore}`;
    round.textContent = `Round: ${count}`;
    count++;
    if (count > 5) {
      if (humanScore > computerScore) {
        winnerText.textContent = "Winner: Human";
      } else if (humanScore < computerScore) {
        winnerText.textContent = "Winner: Computer";
      } else {
        winnerText.textContent = "Winner: Tie";
      }
      count = 1;
      alert("Game Ended");
    }
  });
}

playGame();
