document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);
  
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    // Display result
    const result = document.getElementById('result');
    result.innerHTML = `Your BMI is <span>${bmi}</span> which is considered <span>${category}</span>.`;
  });
  