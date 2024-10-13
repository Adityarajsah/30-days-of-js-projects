document.getElementById('temp-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const temperature = parseFloat(document.getElementById('temp').value);
  const unit = document.getElementById('unit').value;

  let convertedTemp;
  let resultText;

  // Convert temperature
  if (unit === 'celsius') {
    convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    resultText = `${temperature}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
  } else if (unit === 'fahrenheit') {
    convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    resultText = `${temperature}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
  }

  // Display result
  document.getElementById('result').innerHTML = `<span>${resultText}</span>`;
});
