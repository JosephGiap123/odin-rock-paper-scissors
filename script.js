let humanScore = 0;
let computerScore = 0;
console.log(humanScore);
console.log(computerScore);
console.log(getHumanChoice());
console.log(getComputerChoice());


function getComputerChoice(){
    return Math.floor((Math.random()*3)+1)
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors (Type in Rock, Paper or Scissors");
    switch(humanChoice.toLowerCase()){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default: return 1;
    }
}
