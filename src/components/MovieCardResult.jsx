import React ,{useContext}from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardResultStyle from "./style/MovieCardResultStyle";


const MovieCardResult = ({ movie }) => {

  const{addMovieToWatchList ,watchlist,watched} = useContext(GlobalContext);

  //preventing form double add the same movie
  let preventDoubleAdd = watchlist.find(arr => arr.id === movie.id) || watched.find(arr => arr.id === movie.id);
  const disable = preventDoubleAdd ? true : false;

  return (
    <MovieCardResultStyle>
      {movie.poster_path ? (
        <img className="img"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=" missing"
        ></img>
      ) : (
        <div className="img img-miss">{movie.title}</div>
      )}
      <div>{movie.title}</div>

      <div>Data: {movie.release_date ? movie.release_date : ""}</div>
      <button className="button2" disabled={disable} onClick={()=>addMovieToWatchList(movie)}> Add to Watch list</button> 
    </MovieCardResultStyle>
  );
};

export default MovieCardResult;
