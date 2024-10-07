// Function to generate a random hex color code
function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

// Function to update the color box and display the color code
function updateColor() {
  const color = generateRandomColor();
  const colorBox = document.getElementById('color-box');
  const colorCode = document.getElementById('color-code');

  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;
}

// Copy color code to clipboard
function copyColorCode() {
  const colorCode = document.getElementById('color-code').textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    alert(`Color code ${colorCode} copied to clipboard!`);
  });
}

// Event listeners
document.getElementById('generate-btn').addEventListener('click', updateColor);
document.getElementById('copy-btn').addEventListener('click', copyColorCode);

// Generate initial random color on page load
updateColor();
