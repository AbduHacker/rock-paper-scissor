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

function getHumanChoice() {
    let userChoice = prompt("Enter your choice(rock, paper, scissor): ");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (let i = 1; i <= 5; i++) {
        alert("round " + i);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    alert("The game ended");

    if (humanScore > computerScore) {
        alert("Congrtulations! You won in the game");
    } else if  (humanScore < computerScore) {
        alert("Computer wins in the game");
    } else {
        alert("You are Tie with computer in the game")
    }
}

playGame();