const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxLength = textInput.maxLength;

textInput.addEventListener('input', () => {
  const remaining = maxLength - textInput.value.length;
  charCount.textContent = `${remaining} characters remaining`;

  // Add a warning if the remaining characters are less than 20
  if (remaining < 20) {
    charCount.classList.add('warning');
  } else {
    charCount.classList.remove('warning');
  }
});
