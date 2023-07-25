
function getComputerChoice(){
    computer = Math.floor(Math.random() * 3);
    if(computer === 0){
        return "rock"
    } else if (computer === 1){
        return "paper"
    } else if (computer === 2){
        return "scissors"
    } else {
        return "error!"
    }
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    const playerSelectionLower = playerSelection.toLowerCase()
    // const computerSelectionLower = computerSelection.toLowerCase()

    if(playerSelectionLower === "rock" && computerSelection === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
    } else if (playerSelectionLower === "rock" && computerSelection === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
        // Rock ^
    } else if (playerSelectionLower === "paper" && computerSelection === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "paper" && computerSelection === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Paper ^
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you suck!`
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    } else if (playerSelectionLower === "scissors" && computerSelection === "scissors"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you tied!`
        // Scissors ^
    } else {   
        return `error! Bad input, ${playerSelection} is not valid. ${computerSelection} is computer's choice.`
    }
       

}

// console.log(getComputerChoice());

// var playerSelection = "rOCK";
// console.log(playRound(playerSelection, computerSelection));

function testResults (form) {
    const computerSelection = getComputerChoice();
    var inputValue = form.inputbox.value;
    var playerSelection = inputValue;
    alert (playRound(playerSelection, computerSelection));
}

document.getElementById("rps")