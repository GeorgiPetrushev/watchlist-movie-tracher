import React ,{useContext}from "react";
import { GlobalContext } from "./context/GlobalContext";


const MovieCard = ({ movie }) => {

  const{addMovieToWatchList ,watchlist} = useContext(GlobalContext);

  let preventDoubleAdd = watchlist.find(arr => arr.id === movie.id);
  const disable = preventDoubleAdd ? true : false;

  return (
    <div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=" missing"
        ></img>
      ) : (
        <div>{movie.title}</div>
      )}
      <div>{movie.title}</div>

      <div>{movie.release_date ? movie.release_date.slice(0, 4) : ""}</div>
      <button disabled={disable} onClick={()=>addMovieToWatchList(movie)}> Add to Watch list</button> 
    </div>
  );
};

export default MovieCard;
