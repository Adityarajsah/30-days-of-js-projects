document.getElementById('jokeButton').addEventListener('click', fetchJoke);

function fetchJoke() {
  const url = 'https://official-joke-api.appspot.com/jokes/random';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = `${data.setup} <br> <strong>${data.punchline}</strong>`;
    })
    .catch(error => {
      console.error('Error fetching the joke:', error);
    });
}
