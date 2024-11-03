let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);
  
  const dateTimeInput = document.getElementById("dateTimePicker").value;
  const targetDate = new Date(dateTimeInput);

  if (isNaN(targetDate.getTime())) {
    alert("Please enter a valid date and time.");
    return;
  }

  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
}

function updateCountdown(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    alert("Countdown completed!");
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
