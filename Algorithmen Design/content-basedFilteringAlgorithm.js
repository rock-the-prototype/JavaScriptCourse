// Sample data for content-based filtering
const movies = [
    {
        title: "The Dark Knight",
        genre: "Action",
        rating: 9.0,
        director: "Christopher Nolan"
    },
    {
        title: "Inception",
        genre: "Thriller",
        rating: 8.8,
        director: "Christopher Nolan"
    },
    {
        title: "The Godfather",
        genre: "Crime",
        rating: 9.2,
        director: "Francis Ford Coppola"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        rating: 9.3,
        director: "Frank Darabont"
    }
];

// Define the user's preferences
const userPreferences = {
    genre: "Action",
    director: "Christopher Nolan"
};

// Define a function to compute the similarity between movies
function similarity(movie, userPreferences) {
    let similarityScore = 0;
    if (movie.genre === userPreferences.genre) {
        similarityScore += 1;
    }
    if (movie.director === userPreferences.director) {
        similarityScore += 1;
    }
    return similarityScore;
}

// Implement the content-based filtering algorithm
function contentBasedFiltering(movies, userPreferences) {
    // Compute the similarity between each movie and the user's preferences
    const similarityScores = movies.map(movie => {
        return {
            movie: movie,
            score: similarity(movie, userPreferences)
        };
    });

    // Sort the movies by similarity score in descending order
    const sortedMovies = similarityScores.sort((a, b) => {
        return b.score - a.score;
    });

    // Return the top 3 movies with the highest similarity score
    return sortedMovies.slice(0, 3).map(movie => movie.movie.title);
}

// Test the content-based filtering algorithm
const recommendedMovies = contentBasedFiltering(movies, userPreferences);
console.log(recommendedMovies); // Output: ["The Dark Knight", "Inception"]