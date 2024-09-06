let humanScore = 0;
let computerScore = 0;
playGame();


function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();
        playRound(hChoice, cChoice);
    }
    if(humanScore === computerScore){
        console.log("TIE");
    }
    else if(humanScore > computerScore){
        console.log("You win!");
    }
    else{
        console.log("You lose...");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Tie! " + humanChoice + " versus " + computerChoice);
        return;
    }
    if((humanChoice === "rock" && computerChoice == "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        console.log("Loss! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
        return;
    }
    if((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("Win! " + humanChoice + " wins against " + computerChoice);
        humanScore++;
        return;
    }
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
