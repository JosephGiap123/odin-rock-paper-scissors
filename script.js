let humanScore = 0;
let computerScore = 0;


function displayScore(result){
        if(humanScore < 5 && computerScore < 5){
        document.querySelector('.js-result').textContent = result;
        document.querySelector('.js-score').innerHTML = `Your Score: ${humanScore} <br>
        Computer Score: ${computerScore}`;
    }
    else{
        if(humanScore >= 5){
            document.querySelector('.js-result').innerHTML = `${result} <br> You win the game!`;
            document.querySelector('.js-score').innerHTML = `Your Score: ${humanScore} <br>
            Computer Score: ${computerScore}`;
        }
        else{
            document.querySelector('.js-result').innerHTML = `${result} <br> You lost the game...`;
            document.querySelector('.js-score').innerHTML = `Your Score: ${humanScore} <br>
            Computer Score: ${computerScore}`;
        }
     }
}

function playRound(humanChoice, computerChoice){
    let result ='';
    if(humanChoice === computerChoice){
        result = ("Tie! " + humanChoice + " versus " + computerChoice);
    }
    if((humanChoice === "rock" && computerChoice == "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        result = ("Loss! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    if((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        result = ("Win! " + humanChoice + " wins against " + computerChoice);
        humanScore++;
    }
    displayScore(result);
    return;
}


function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()*3)+1);
    switch(randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "NONE";
    }
}


document.querySelector('.js-rock').addEventListener('click',()=>{
    playRound('rock', getComputerChoice());
});
document.querySelector('.js-paper').addEventListener('click',()=>{
    playRound('paper', getComputerChoice());
});
document.querySelector('.js-scissors').addEventListener('click',()=>{
    playRound('scissors', getComputerChoice());
});