// Function to handle form submission
document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var movieTitle = document.getElementById('movieTitle').value;
    var liked = document.getElementById('liked').value;
    
    // Create an object to represent the movie and its rating
    var movie = {
        title: movieTitle,
        liked: liked
    };
    
    // Retrieve existing data from localStorage or initialize an empty array
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    // Add the new movie to the array
    movies.push(movie);
    
    // Store the updated array back into localStorage
    localStorage.setItem('movies', JSON.stringify(movies));
    
    // Optional: Display a message or update the UI to indicate success
});

// Function to retrieve stored movie ratings
function displayMovieRatings() {
    // Retrieve existing data from localStorage
    var movies = JSON.parse(localStorage.getItem('movies'));

    // Check if there are any movies stored
    if (movies) {
        // Loop through each movie object and do something with the data
        movies.forEach(function(movie) {
            console.log(movie.title + ': ' + movie.liked);
        });
    } else {
        console.log('No movie ratings found.');
    }
}

// Display movie ratings when the page loads
window.addEventListener('DOMContentLoaded', displayMovieRatings);

// Update movie ratings when localStorage changes
window.addEventListener('storage', function(event) {
    if (event.key === 'movies') {
        // If the 'movies' key in localStorage changes, update the displayed movie ratings
        displayMovieRatings();
    }
});