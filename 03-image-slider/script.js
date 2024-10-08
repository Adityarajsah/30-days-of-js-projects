const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

// Total number of images
const totalImages = slider.children.length;

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0; // Loop back to the first image
  }
  updateSliderPosition();
});

// Event listener for the "Prev" button
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Go to the last image
  }
  updateSliderPosition();
});

// Function to update the slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}