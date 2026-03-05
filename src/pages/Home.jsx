import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "./../css/Home.css";

function Home() {
  // STATE
  // WHEN A STATE CHANGE OCCURS, THE ENTIRE COMPONENTS IS RERAN OR RE-RENDERED
  // We need to use state because wtv the value is, we want to store withing this component
  // Just when u refresh the webpage the state restarts
  // searchQuery will store the value
  // setSearchQuery will change it
  // useState("") will define default value
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
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
