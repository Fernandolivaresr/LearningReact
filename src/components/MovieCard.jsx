import "./../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("Clicked");
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
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♡
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
