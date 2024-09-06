let humanScore = 0;
let computerScore = 0;
console.log(getComputerChoice());
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    
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

function getHumanChoice(){
    let humanChoice = "null";
    while(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors")
    {
        humanChoice = prompt("Choose Rock, Paper or Scissors (Type in Rock, Paper or Scissors").toLowerCase();
    }
    return humanChoice;
}
