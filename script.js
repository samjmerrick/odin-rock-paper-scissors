const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function properCase(string) {
  const lower = string.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = properCase(playerSelection);

  if (!choices.find((choice) => choice == playerSelection)) {
    console.error("Enter Rock, Paper or Scissors");
    return;
  }

  if (playerSelection == computerSelection) {
    return "Tie";
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return "Player";
    }
    if (computerSelection == "Paper") {
      return "Computer";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "Player";
    }
    if (computerSelection == "Scissors") {
      return "Computer";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "Player";
    }
    if (computerSelection == "Rock") {
      return "Computer";
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors?");

    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    if (winner == "Computer") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    } else if (winner == "Player") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (winner == "Tie") {
      console.log(`Tie! Both picked ${computerSelection}`);
    } else {
      console.log("Something went wrong");
    }
  }

  console.log(`Game over! Computer: ${computerScore} Player ${playerScore}`);
}
