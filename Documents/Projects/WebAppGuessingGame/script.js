let randomNumber = Math.floor(Math.random() * 10);
let totalGuesses = 0;

function game() {
  let userInput = parseInt(document.getElementById("user-input").value);
  let result = document.getElementById("result");
  const totalGuessesHTML = document.getElementById("total-guesses");
  const hintBtn = document.getElementById("hint");
  const hint = document.getElementById("hint-p");

  if (userInput === randomNumber) {
    totalGuesses++;
    result.innerHTML = `Great job! You guessed it in only ${totalGuesses} guesses.`;
    totalGuessesHTML.innerHTML = `Total Guesses: ${totalGuesses}`;
  } else if (userInput !== randomNumber) {
    totalGuesses++;
    result.innerHTML = `Not this time. Guess again.`;
    totalGuessesHTML.innerHTML = `Total Guesses: ${totalGuesses}`;
  } else {
    result.innerHTML = `Please input your guess`;
  }
}

function reset() {
  location.reload();
}
