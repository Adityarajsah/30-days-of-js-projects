const apiUrl = "https://www.omdbapi.com/?apikey=2dac90c4&t=";

document.getElementById('fetch-btn').addEventListener('click', function() {
    const movieTitle = document.getElementById('movie-input').value;
    fetchMovieInfo(movieTitle);
});

function fetchMovieInfo(title) {
    fetch(apiUrl + title)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                document.getElementById('movie-details').innerHTML = `<p>Movie not found. Please try another title.</p>`;
            }
        })
        .catch(error => {
            console.log("Error fetching movie data:", error);
        });
}

function displayMovieDetails(movie) {
    const movieDetails = `
        <div class="movie-title">${movie.Title} (${movie.Year})</div>
        <div class="movie-info">Genre: ${movie.Genre}</div>
        <div class="movie-info">Director: ${movie.Director}</div>
        <div class="movie-info">Actors: ${movie.Actors}</div>
        <div class="movie-info">Plot: ${movie.Plot}</div>
        <div class="movie-info">IMDb Rating: ${movie.imdbRating}</div>
    `;
    document.getElementById('movie-details').innerHTML = movieDetails;
}
