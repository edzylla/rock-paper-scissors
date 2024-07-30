let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 5;

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    let string;

    switch(choice)
    {
        case 0:
            string = "rock";
            break;
        case 1:
            string = "paper";
            break;
        case 2:
            string = "scissors";
            break;
    }

    return string;
}

function getHumanChoice(){
    let choice = prompt("Choose between: rock, paper and scissors");
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    )
    {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if(humanChoice === computerChoice)
    {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        console.log(`Tie!`);
        roundsPlayed++;
    }
    else
    {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame()
{
    for(let i = 0;i < roundsPlayed; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore)
        console.log("congratsulations! You won!");
    else
        console.log("You lost!");
    console.log(humanScore);
    console.log(computerScore);
}

playGame();