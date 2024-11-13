const cells = document.querySelectorAll('[data-cell]');
const statusDisplay = document.getElementById('game-status');
const restartButton = document.getElementById('restart-button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let currentPlayer = 'X';
let board = Array(9).fill(null); // Represent the board as an array
let playerScore = 0;
let computerScore = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (board[cellIndex] !== null || checkWinner()) {
        return;
    }

    makeMove(cellIndex, 'X');

    if (!checkWinner() && !board.every(cell => cell !== null)) {
        setTimeout(computerMove, 500);
    }
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    if (checkWinner()) {
        if (player === 'X') {
            playerScore++;
            statusDisplay.textContent = 'You win!';
        } else {
            computerScore++;
            statusDisplay.textContent = 'Computer wins!';
        }
        updateScore();
    } else if (board.every(cell => cell !== null)) {
        statusDisplay.textContent = 'Draw!';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    }
}

function computerMove() {
    let availableCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    makeMove(randomIndex, 'O');
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function updateScore() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function restartGame() {
    board.fill(null);
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);

statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
