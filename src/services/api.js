const API_KEY = "e64a5a4f141b0e702dd4af46f7614252"
const BASE_URL = "https://api.themoviedb.org/3"

// its asynchronus: it will take a sec b4 getting the result
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export const searchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results
}
