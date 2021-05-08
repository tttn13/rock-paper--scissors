const arr = ["rock","paper","scissors"];

function showStuff() {
     document.querySelector('#reset').style.display = "block";
}

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const results = {
    WIN: 1,
    LOSE: 2,
    DRAW: 3,
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection ){
        return results.DRAW;
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                return results.LOSE;
            } else {
                return results.WIN;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                return results.WIN;
            } else {
                return results.LOSE;
            }
        } else {
            if (computerSelection == "rock") {
                return results.LOSE;
            } else {
                return results.WIN;
            }
        }
    }
}

function gameInit() {
    resetState();

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => { 
        button.addEventListener('click', () => {
            if (playerScore == 5 || computerScore == 5) {
                return;
            }
            game(button.id);
            displayScore(playerScore);
            if (playerScore == 5) {
                displayWinner("Player");
            } else if (computerScore == 5) {
                displayWinner("Computer");
            }  
        }) 
    })

    var resetButton = document.querySelector('input[type="button"]');
    resetButton.addEventListener('click', restartGame);
}

function resetState(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#scores').innerHTML = "";
    document.querySelector('#winner').innerHTML = "";
    document.querySelector('#reset').style.display = 'none';
    document.querySelector('#buttons').style.display = 'flex';
}

function game(player) {
    let computer = computerPlay(arr);
    console.log("We are playing: " + player + " " + computer);
    result = playRound(player, computer);
    if (result==results.WIN) {
        playerScore += 1;
    } else if (result == results.LOSE) {
        computerScore += 1;
    } else { 
        computerScore += 1; 
        playerScore += 1;
    } 
}

function displayScore(playerScore) {
    const finalResult = document.querySelector('#scores');
    finalResult.textContent = ` Player score is : ${playerScore} \r\n
                                Computer score is: ${computerScore}`;
}

function displayWinner(winner) {
    const finalWinner = document.querySelector('#winner');
    finalWinner.textContent = `The Winner is: ${winner}! Game Ends! `;
    document.querySelector('#reset').style.display = 'block';
    document.querySelector('#buttons').style.display = 'none';
}

function restartGame() {
    resetState();
}



gameInit();

