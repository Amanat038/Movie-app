import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
   const res = await axios.get(
      `${BASE_URL}/trending/movies/week?api_key=${API_KEY}`
   );
   return res.data.results;
};

export const fetchMoviesDetails = async (id) => {
   const res = await axios.get(`${BASE_URL}/movies/${id}?api_key=${API_KEY}`);
   return res.data;
};

export const searchMovies = async () => {
   const res = await axios.get(`${BASE_URL}/search/movies?api_key=${API_KEY}`);
   return res.data.results;
};
