let humanScore = 0;
let computerScore = 0;

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

const score = document.querySelector("#score");

const div2=document.createElement("div");
const div1=document.createElement("div");
const div3=document.createElement("div");

function playRound(humanChoice, computerChoice)
{
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    )
    {
        humanScore++;
        
        div1.textContent = humanScore;
        div2.textContent = computerScore;
        div3.textContent = `The winner is ${humanChoice}`;

        score.appendChild(div1);
        score.appendChild(div2);
        score.appendChild(div3);
    }
    else if(humanChoice === computerChoice)
    {
        div1.textContent = humanScore;
        div2.textContent = computerScore;
        div3.textContent = "Tie";

        score.appendChild(div1);
        score.appendChild(div2);
        score.appendChild(div3);
    }
    else
    {
        computerScore++;
        
        div1.textContent = humanScore;
        div2.textContent = computerScore;
        div3.textContent = `The winner is ${computerChoice}`;

        score.appendChild(div1);
        score.appendChild(div2);
        score.appendChild(div3);   
    }

    
}

replay = document.querySelector("#replay");

replay.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;    
});

buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(humanScore < 5 && computerScore < 5)
            playRound(button.textContent, getComputerChoice());
        else if (humanScore == 5)
        {
            score.removeChild(div2);
            score.removeChild(div3);
            div1.textContent = "you won";
            score.appendChild(div1);
        }
        else
        {
            score.removeChild(div2);
            score.removeChild(div3);
            div1.textContent = "you lost";
            score.appendChild(div1);
        }

    });
});




