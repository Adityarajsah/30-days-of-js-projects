const toggleBtn = document.getElementById('toggle-btn');

// Check if user has a saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.classList.toggle('dark-mode');

    // Save the user's preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
