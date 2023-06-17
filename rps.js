
function getComputerChoice(){
    computer = Math.floor(Math.random() * 3);
    if(computer === 0){
        return "Rock"
    } else if (computer === 1){
        return "Paper"
    } else if (computer === 2){
        return "Scizzors"
    } else {
        return "error!"
    }
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    playerSelectionLower = playerSelection.toLowerCase()
    computerSelectionLower = computerSelection.toLowerCase()

    if(playerSelectionLower === "rock" && computerSelectionLower === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
    } else if (playerSelectionLower === "rock" && computerSelectionLower === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "rock" && computerSelectionLower === "scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
        // Rock ^
    } else if (playerSelectionLower === "paper" && computerSelectionLower === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelectionLower === "paper" && computerSelectionLower === "scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "paper" && computerSelectionLower === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Paper ^
    } else if (playerSelectionLower === "scizzors" && computerSelectionLower === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "scizzors" && computerSelectionLower === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelectionLower === "scizzors" && computerSelectionLower === "scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Scizzors ^
    } else {   
        return 'error!'
    }
       

}

// console.log(getComputerChoice());

var playerSelection = "ScizzorS";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));