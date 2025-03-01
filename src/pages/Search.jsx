import React, { useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const Search = () => {
   const [query, setQuery] = useState("");
   const [results, setResult] = useState([]);
   const [loading, setLoading] = useState(false);
   const [searched, setSearched] = useState(false);

   const handleSearch = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSearched(true);
      if (!query.trim()) return;
      try {
         const movies = await searchMovies(query);
         console.log("searchMovies", movies);
         setResult(movies);
      } catch (e) {
         console.error("search error", e);
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className="flex flex-col items-center min-h-screen p-6 text-white bg-gray-900">
         <form onSubmit={handleSearch} className="flex mb-6 space-x-4">
            <input
               className="w-64 p-2 text-black rounded-lg"
               type="text"
               placeholder="search movies.."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
            <button
               className="px-4 py-2 text-white bg-blue-500 rounded-lg"
               type="submit"
            >
               search
            </button>
         </form>
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-[100px]">
            {loading ? (
               <Loading /> 
            ): results.length >0 ? (
               results.map((movie) => 
                  <MovieCard key={movie.id} movie={movie} />)
               ): searched ? (
                  <p>No Movies Found</p>
               ):null}
         </div>
      </div>
   );
};

export default Search;
