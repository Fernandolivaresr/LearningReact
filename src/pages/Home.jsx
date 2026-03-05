import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  // STATE
  // WHEN A STATE CHANGE OCCURS, THE ENTIRE COMPONENTS IS RERAN OR RE-RENDERED
  // We need to use state because wtv the value is, we want to store withing this component
  // Just when u refresh the webpage the state restarts
  // searchQuery will store the value
  // setSearchQuery will change it
  // useState("") will define default value
  const [searchQuery, setSearchQuery] = useState("");

  // useEFFECT
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // how to use
  // pretty much we pass a function and then
  /* You put a function(() => {}) inside useEffect that you want to call when the array([]) changes  
  We pass a function known as dependency array, 
  we gonna check it every render
  
  So dependency array
  Anything inside the [], if any of those values change, it will run the effect(the function () =>) again
  If nothing inside : it will just run the fun 1 time right when the component is rendered on screen.
  And if any STATE changes the effect will not run cuz nothing has changed in the dependency array
  */
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        // we not longer loading
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const movies2 = [
    { id: 1, title: "Jonh Wick", release_date: "2022" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "2000" },
    { id: 4, title: "Sicario", release_date: "2020" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies ..."
          className="search-input"
          // ICI u set the value of it
          value={searchQuery}
          // ICI u set the state = to the target.value (inline func)
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            // conditionally rendering the movie (includes vs startsWith)
            movie.title.toLowerCase().includes(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
