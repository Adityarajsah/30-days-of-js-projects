const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFBD33', '#FF8333', '#33FFF5', '#C70039', '#581845', '#900C3F'];

document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Generate a random index to select a color
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Change the background color of the body
    document.body.style.backgroundColor = colors[randomIndex];
});
