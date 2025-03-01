import axios from "axios";

const API_KEY = "300cf7d434c6bf76da52b5c336e72d9e";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
   try {
      const res = await axios.get(
         `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );

      return res.data.results;
   } catch (err) {
      console.error("error fetching trending movies", err);
   }
};

export const fetchMoviesDetails = async (id) => {
   try {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

      return res.data;
   } catch (err) {
      console.error("error fetching Movie details", err);
   }
};

export const searchMovies = async (query) => {
   try {
      const res = await axios.get(
         `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      return res.data.results;
   } catch (err) {
      console.error("Error in retrieving movie", err);
   }
};

export const movieReviews = async (id) => {
   try {
      const res = await axios.get(
         `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
      );

      return res.data;
   } catch (err) {
      console.error("error fetching movie review", err);
      return { error: "Failed to fetch movie review" };
   }
};
