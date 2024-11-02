function checkPalindrome() {
  const inputText = document.getElementById('inputText').value;
  const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');
  const result = document.getElementById('result');

  if (cleanedText === reversedText) {
    result.textContent = `"${inputText}" is a palindrome! 🎉`;
    result.style.color = "green";
  } else {
    result.textContent = `"${inputText}" is not a palindrome. ❌`;
    result.style.color = "red";
  }
}
