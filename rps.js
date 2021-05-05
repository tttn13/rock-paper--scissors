const arr = ["rock","paper","scissors"];

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection ){
        return "Draw";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = "You lose! Paper beats Rock";
        } else {
            result = "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You win! Paper beats Rock";
        } else {
            result = "You lose! Scissors cuts Paper";
        }
    } else {
        if (computerSelection == "rock") {
            result = "You lose! Rock beats Scissors";
        } else {
            result = "You win! Scissors cuts Paper";
        }
    } 
    return result;
}

function game() {
    for (i = 0; i < 5; i++) {   
        const playerSelection = prompt("Enter selection").toLowerCase();
        const computerSelection = computerPlay(arr);
        alert(playRound(playerSelection, computerSelection));
    }
}

game();