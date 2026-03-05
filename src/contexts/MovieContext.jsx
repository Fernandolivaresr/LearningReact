/* Not necessarily a component even if it kinda looks like one
Its meant to provide some global state and some helper functions
That we can use from multiple places within our app

Its like a State Manager
*/

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// Provide state to any of the component that are wrapped around it
// CHILDREN is a "reserved prop" when you write a component and children is anything that's inside of the component that you rendered
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //Local storage: store within our browser
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    //it will take the string with an array of ids and then convert it to the normal movie store
    // Here we do the reverse operation "JSON.parse" where we take the string and convert it back to an array
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  // dependency array
  /* HERE we saying that every time the favorite state changes
  we want to update what we storing in the localStorage
  ** It only runs when the favorite state changes
  so when it changes this hook effect runs
  */
  useEffect(() => {
    // and we set in localStorage with the "favorites" KEY, and we gonna be storing the new kinda version of our favorites
    // We take the favorites which is an array convert it to a string
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  /* WELL NOW WE NEED
    1- operation to add favorite
    2- operation to remove favorite
    3- operation to check if its a favorite
  */

  const addToFavorites = (movie) => {
    // so here it will
    // take the prevous (prev) values = either EMPTY ARRAY OR CURRENT FAVORITE MOVIES
    // we gonna get all of those (...prev)
    // and then we gonna add the new movie (, movie])
    // THIS IS HOW TO UPDATE AN STATE WITH AN ARRAY INIT
    setFavorites((prev) => [...prev, movie]);
  };
  const removeFromFavorites = (movieId) => {
    // we generating a new array of movies that are not equal to the movie we want to delete
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorites = (movieId) => {
    // it checks all the movies IDs in our favorites
    // And it sees if one them are equal to the movieID that we looking at
    // if it is we return true otherwise false ♥
    return favorites.some((movie) => movie.id === movieId);
  };

  /*If we want the state and functions to be accessible to any of the children
  that are wrapped inside the <MovieContext.Provider>{children}</MovieContext.Provider>;
  then we need to provide a VALUE in the PROVIDER
  */
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorites,
  };

  return (
    // Key that you can provide in your provider
    // and now anything thats inside of it {children} can access all of the values inside of the value object
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
