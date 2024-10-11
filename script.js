let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    let computerChoices = ["rock", "paper", "scissor"];
    return computerChoices[randomValue]; 
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice(rock paper scissor): ")
    if (userChoice === null) return;
    userChoice = userChoice.toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissor") {
        alert("Invalid option");
        return getHumanChoice();
    }
    return userChoice;
}

function playRound(compchoice, userchoice) {
    if (compchoice === userchoice) {
        console.log("It's a draw!");
    }
    else if (compchoice === "rock" && userchoice === "scissor" || compchoice === "scissor" && userchoice === "paper" || compchoice === "paper" && userchoice === "rock") {
        console.log(`Computer Wins! ${compchoice} beats ${userchoice}`);
        console.log(`Scores: Computer = ${computerScore}\tHuman = ${humanScore}`);
        computerScore++;
    }
    else {
        console.log(`Human Wins! ${userchoice} beats ${compchoice}`);
        console.log(`Scores: Computer = ${computerScore}\tHuman = ${humanScore}`);
        humanScore++;
    }
}

function playGame() {
    for (i = 1; i <= 5; i++) {
        compchoice = getComputerChoice();
        humanchoice = getHumanChoice();
        playRound(compchoice, humanchoice);
    }
}