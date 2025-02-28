import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetchTrendingMovies().then(setMovies);
   }, []);



   return <div className="p-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {
      movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))
    }
   </div>;
};

export default Home;
