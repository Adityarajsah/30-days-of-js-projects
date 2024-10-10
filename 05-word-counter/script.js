const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', () => {
  const text = textInput.value.trim();

  // Count words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;

  // Count characters
  charCount.textContent = text.length;
});
