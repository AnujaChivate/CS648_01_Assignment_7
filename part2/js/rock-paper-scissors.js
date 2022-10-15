// Phase 1
// Get User's choice & validate
function getUserChoice() {
    var userChoice = window.prompt("Select your choice (rock/scissors/paper)");

    if(
        userChoice.toLowerCase() === "rock" ||
        userChoice.toLowerCase() === "scissors" ||
        userChoice.toLowerCase() === "paper")
    {
        return userChoice;
    } else {
       window.alert("Invalid input!");
       return;
    }
}

// Phase 2
// Get Computer's choice
function getComputerChoice() {
    var computerChoice =  Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    };
}

// Phase 3
// find the winner
function gameWinner() {
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
         
    if(userChoice === computerChoice) {
        alert("Game is a tie.");
        return;
    }
    else if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "paper") {
            alert("Computer won!"  + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }              
    }
    else if(userChoice === "scissors") {
        if(computerChoice === "paper") {
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "rock") {
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
    }
    else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            alert("You won!" + " your choice is: " + userChoice + "  & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "scissors") {
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }              
    }
}

// start playing and continue the game if user selects Okay.
function playRockPaperScissor()
{
    do {
        gameWinner();
        var playAgain = window.confirm("Play Again?") ;
    } while(playAgain);
}

playRockPaperScissor();