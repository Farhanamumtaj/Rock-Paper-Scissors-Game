let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loss: 0,
  ties: 0,
};

updateScore();

function pickComputerMove() {
  let computerMove = "";
  const randomNumb = Math.random();
  if (randomNumb >= 0 && randomNumb <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumb > 1 / 3 && randomNumb <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumb > 2 / 3 && randomNumb <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

let result = "";
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lost.";
    } else if (computerMove === "paper") {
      result = "You won!";
    } else if (computerMove === "scissors") {
      result = "It's a tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You won!";
    } else if (computerMove === "paper") {
      result = "It's a tie.";
    } else if (computerMove === "scissors") {
      result = "You lost.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "It's a tie.";
    } else if (computerMove === "paper") {
      result = "You lost.";
    } else if (computerMove === "scissors") {
      result = "You won!";
    }
  }
   
  document.querySelector('.js-move')
    .innerHTML = `You <img src="Images/${playerMove}-emoji.png" alt="" class="move-icon"> <img src="Images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
  
  updateResult();
  
  if (result === "You won!") score.wins++;
  else if (result === "It's a tie.") score.ties++;
  else if (result === "You lost.") score.loss++;

  localStorage.setItem("score", JSON.stringify(score));
  
  updateScore();
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `Wins:${score.wins} Ties:${score.ties} Loses:${score.loss}`;
}

function updateResult(){
  document.querySelector('.js-result')
  .innerHTML = `${result}`;
}