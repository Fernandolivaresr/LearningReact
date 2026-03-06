import "./../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        {console.log("Not empty")}
        {console.log(favorites)}
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      {console.log("Empty")}
      {console.log(favorites)}
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear</p>
    </div>
  );
}

export default Favorites;
