const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = `🎲`;
  result.textContent = `You rolled a ${roll}`;
}

rollButton.addEventListener('click', rollDice);
