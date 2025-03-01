import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetchTrendingMovies().then(setMovies);
   }, []);

   return (
      <div className="min-h-screen p-6 text-white bg-gray-900">
         <h2 className="mb-6 text-2xl font-bold text-center">
            Trending Movies
         </h2>
         <div className="grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {movies.length > 0 ? (
               movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie}></MovieCard>
               ))
            ) : (
               <p className="text-center">No Movies </p>
            )}
         </div>
      </div>
   );
};

export default Home;
