// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Select elements from the DOM
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');

// Add event listener for the guess button
guessBtn.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = 'Please enter a number between 1 and 10.';
    message.style.color = 'red';
    return;
  }

  // Check the user's guess
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
    message.style.color = 'green';
    resetGame();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'orange';
  }
});

// Reset the game by generating a new random number
function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  guessInput.value = '';
}
