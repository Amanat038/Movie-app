import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "../api/tmdb";

const MovieDetails = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);

   useEffect(() => {
      fetchMoviesDetails(id).then(setMovie);
   }, [id]);
   if (!movie) return <p>Loading....</p>;
   return (
      <div>
         <h1>{movie.title}</h1>
         <p>{movie.overview}</p>

         <p>⭐{movie.vote_average}</p>
      </div>
   );
};

export default MovieDetails;
