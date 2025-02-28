import React, { useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Search = () => {
   const [query, setQuery] = useState("");
   const [results, setResult] = useState([]);

   const handleSearch = async (e) => {
      e.preventDefault();
      const movies = await searchMovies(query);
      setResult(movies);
   };
   return (
      <div>
         <form onSubmit={handleSearch}>
            <input
               type="text"
               placeholder="search movies.."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">search</button>
         </form>
         <div>
            {results.map((movie) => (
               <MovieCard key={movie.id} movie={movie} />
            ))}
         </div>
      </div>
   );
};

export default Search;
