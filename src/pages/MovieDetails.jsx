import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails, movieReviews } from "../api/tmdb";

const MovieDetails = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetchMoviesDetails(id).then(setMovie);
      movieReviews(id).then((data) => setReviews(data.results));
   }, [id]);
   if (!movie) return <p>Loading....</p>;
   return (
      <div className="flex flex-col items-center p-6 text-white bg-gray-900 lg:flex-row lg:items-start lg:p-12">
         <img
            className="w-full max-w-sm rounded-lg shadow-lg lg:max-w-md"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
         />
         <div className="max-w-3xl mt-6 lg:mt-0 lg:ml-12">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-gray-300">{movie.overview}</p>

            <div className="flex items-center mt-4 space-x-4">
               <p className="text-lg font-semibold text-yellow-400">⭐{movie.vote_average.toFixed(1)}</p>
               <p className="text-gray-400">📅{movie.release_date}</p>
            </div>
            
            <div className="mt-8">
               <h2 className="text-2xl font-semibold">
                  Commnets
                </h2>
                  { reviews.length > 0 ?(
                     <div className="mt-4 space-y-4">
                        {reviews.map((review) => (
                           <div key={review.id}>
                              <h3 className="text-lg font-semibold text-blue-400">{review.author}</h3>
                              <p className="text-gray-300">{review.content}</p>
                           </div>
                        ))}
                     </div>
                  ):(
                     <p className="mt-4 text-gray-400"> No comments available..</p>
                  )}
               
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;
