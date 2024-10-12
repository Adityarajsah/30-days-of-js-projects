// Variables to store time
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// Variable to store the timer function
let timer = null;

// Get elements from HTML
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

// Start the stopwatch
function startStopwatch() {
  if (timer === null) { // Only start if no timer is running
    timer = setInterval(updateTime, 10); // Update every 10 milliseconds
  }
}

// Update the time on the stopwatch
function updateTime() {
  milliseconds += 10; // Increase milliseconds by 10 each time

  if (milliseconds === 1000) { // 1000 milliseconds = 1 second
    milliseconds = 0;
    seconds += 1; // Increase seconds
  }

  if (seconds === 60) { // 60 seconds = 1 minute
    seconds = 0;
    minutes += 1; // Increase minutes
  }

  // Update the display
  millisecondsDisplay.textContent = formatTime(milliseconds / 10); // Show milliseconds in 2 digits
  secondsDisplay.textContent = formatTime(seconds); // Show seconds in 2 digits
  minutesDisplay.textContent = formatTime(minutes); // Show minutes in 2 digits
}

// Format time to always show 2 digits
function formatTime(time) {
  return time < 10 ? '0' + time : time; // Add 0 if the number is less than 10
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(timer); // Stop the timer
  timer = null; // Reset timer variable
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer); // Stop the timer
  timer = null; // Reset timer variable
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  // Reset the display
  millisecondsDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  minutesDisplay.textContent = '00';
}

// Get buttons from HTML
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Add click events for buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
