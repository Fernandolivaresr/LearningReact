import "./App.css";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      {/* Well here u add all the routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

/*
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Harry Potter", release_date: "2005" }} />
      ) : (
        <MovieCard movie={{ title: "joes film", release_date: "2022" }} />
      )}

This is OK
    <Text display={"What's up"}/>
    <Text display={"Nothing to be fair"}/>

This will break hook/usetates rules, but it works if nothing inside the func
    Text({ display: "Hello" })*

/* We must define the function with CAP letter */
function Text({ display }) {
  return (
    <>
      <div>
        <p>{display}</p>
      </div>
    </>
  );
}

/*       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
