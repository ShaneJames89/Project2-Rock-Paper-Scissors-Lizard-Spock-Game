 /**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = parseInt(this.getAttribute("data-choice"), 10);
        console.log("Player clicked:", playerChoice); // Log to check if the click is registered
        playGame(playerChoice);
    });
}


/**
 * The main game function. Accepts one parameter, which 
 * is the date-choice value of the selected button
 */
function playGame(playerChoice) {
    console.log("Playing game with choice:", playerChoice);

    let playerChoiceName = choices[playerChoice];
    playerImage.src = `assets/images/${playerChoiceName}.png`;
    playerImage.alt = playerChoiceName;

    let computerChoiceIndex = Math.floor(Math.random() * 5);
    let computerChoiceName = choices[computerChoiceIndex];

    computerImage.src = `assets/images/${computerChoiceName}.png`;
    computerImage.alt = computerChoiceName;

    console.log("Player Image:", playerImage.src);
    console.log("Computer Image:", computerImage.src);

    let result = checkWinner(computerChoiceName, playerChoiceName);
    updateScores(result);
    console.log("Result:", result);
}


/**
 * Checks to see who the winner is, it accepts two strings as
 * parameters representing the choices of the computer and player
 */

function checkWinner(computerChoice, playerChoice) {
    console.log("Checking Winner...");
    console.log("Computer Choice:", computerChoice);
    console.log("Player Choice:", playerChoice);

    if (computerChoice === playerChoice) {
        return "It's a tie!";
    }

    if (
        (computerChoice === "rock" && (playerChoice === "scissors" || playerChoice === "lizard")) ||
        (computerChoice === "paper" && (playerChoice === "rock" || playerChoice === "spock")) ||
        (computerChoice === "scissors" && (playerChoice === "paper" || playerChoice === "lizard")) ||
        (computerChoice === "lizard" && (playerChoice === "spock" || playerChoice === "paper")) ||
        (computerChoice === "spock" && (playerChoice === "scissors" || playerChoice === "rock"))
    ) {
        return "Computer wins!";
    } else {
        return "You win!";
    }
}

/**
 * Updates the scores based on the game result
 */
function updateScores(result) {
    if (result === "You win!") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (result === "Computer wins!") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    messages.textContent = result;
}

// Reset the game
function resetGame() {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    messages.textContent = "Make a choice:";
    playerImage.src = "assets/images/RPSLS.png";
    computerImage.src = "assets/images/RPSLS.png";
}

// Event listener for the reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

document.querySelector('.control').addEventListener('click', () => {
    console.log('Button Clicked!');
});
