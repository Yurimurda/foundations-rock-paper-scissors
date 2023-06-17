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

    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelection === "Rock" && computerSelection === "Scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
        // Rock ^
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelection === "Paper" && computerSelection === "Scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Paper ^
    } else if (playerSelection === "Scizzors" && computerSelection === "Rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelection === "Scizzors" && computerSelection === "Paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelection === "Scizzors" && computerSelection === "Scizzors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Scizzors ^
    } else {   
        return 'error!'
    }
       

}

// console.log(getComputerChoice());

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));