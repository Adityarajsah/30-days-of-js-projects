const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const resetButton = document.getElementById('reset');

let userChoice, computerChoice, result;

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = `Your choice: ${capitalize(userChoice)}`;
    
    computerChoice = generateComputerChoice();
    computerChoiceDisplay.textContent = `Computer's choice: ${capitalize(computerChoice)}`;
    
    result = determineWinner(userChoice, computerChoice);
    outcomeDisplay.textContent = `Result: ${result}`;
  });
});

function generateComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a draw!';
  }
  if ((user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')) {
    return 'You win!';
  }
  return 'You lose!';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

resetButton.addEventListener('click', () => {
  userChoiceDisplay.textContent = 'Your choice: ';
  computerChoiceDisplay.textContent = 'Computer\'s choice: ';
  outcomeDisplay.textContent = 'Result: ';
});
