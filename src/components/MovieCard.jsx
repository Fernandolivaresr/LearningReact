import "./../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  // this is giving movie card, access to all this functions
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();

  const favorite = isFavorites(movie.id);

  function onFavoriteClick(e) {
    //alert("Clicked");
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          // Link to get the images`https://image.tmdb.org/t/p/w500${movie.poster_path}`
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {
            // here you get just the year when u get the array 0 after spliting the date yyyy-mm-dd
            movie.release_date?.split("-")[0]
          }
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
