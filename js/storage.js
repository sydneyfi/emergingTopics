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