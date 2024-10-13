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

function declareWinners() {
    if (humanScore === 5) {
        alert(`Humans Win. Score: Humans = 5. Resetting Game...`);
        humanScore = 0;
        computerScore = 0;
        results.textContent = `Scores: Computer = ${computerScore} Human = ${humanScore}`;
        return;
    }
    else if (computerScore === 5) {
        alert(`Computers Win. Score: Computers = 5. Resetting Game...`);
        humanScore = 0;
        computerScore = 0;
        results.textContent = `Scores: Computer = ${computerScore} Human = ${humanScore}`;
        return;
    }
}

function playRound() {
    compchoice = getComputerChoice();
    userchoice = this.textContent;
    if (compchoice === userchoice) {
        alert("It's a draw!");
    }
    else if (compchoice === "rock" && userchoice === "scissor" || compchoice === "scissor" && userchoice === "paper" || compchoice === "paper" && userchoice === "rock") {

        alert(`Computer Wins! ${compchoice} beats ${userchoice}`);
        computerScore++;
        results.textContent = `Scores: Computer = ${computerScore} Human = ${humanScore}`;
        if (computerScore === 5) declareWinners();
    }
    else {
        alert(`Human Wins! ${userchoice} beats ${compchoice}`);
        humanScore++;
        results.textContent = `Scores: Computer = ${computerScore} Human = ${humanScore}`;
        if (humanScore === 5) declareWinners();
    }
}

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const btn1 = document.createElement("button");
btn1.textContent = "rock";
btn1.classList.add("choice");

const btn2 = document.createElement("button");
btn2.textContent = "paper";
btn2.classList.add("choice");

const btn3 = document.createElement("button");
btn3.textContent = "scissors";
btn3.classList.add("choice");

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);


const results = document.createElement("div");
results.textContent = `Scores: Computer = ${computerScore} Human = ${humanScore}`;
container.appendChild(results);

const btns = document.querySelectorAll(".choice");

btns.forEach(btn => {
    btn.addEventListener("click", playRound);
});

