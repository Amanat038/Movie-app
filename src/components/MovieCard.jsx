import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
   return (
      <div className="flex p-4 text-white transition transform bg-gray-900 rounded-lg shadow-md flax-col hover:scale-105 hover:shadow-xl">
         <Link to={`movie/${movie.id}`} className="w-full">
            <img
            className="object-cover w-full rounded-md h-80"
               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
               alt={movie.title}
            />
            <div className="mt-3 text-center">
            <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
            <p className="mt-1 text-yellow-400">⭐{movie.vote_average}</p>
            </div>
         </Link>
      </div>
   );
};

export default MovieCard;
