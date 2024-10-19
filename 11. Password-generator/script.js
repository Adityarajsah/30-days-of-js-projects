document.getElementById('generate-btn').addEventListener('click', function() {
  const length = parseInt(document.getElementById('length').value);
  const password = generatePassword(length);
  document.getElementById('result').innerText = password;
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const password = document.getElementById('result').innerText;
  
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard');
    }).catch(err => {
      alert('Failed to copy password');
    });
  }
});

function generatePassword(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
