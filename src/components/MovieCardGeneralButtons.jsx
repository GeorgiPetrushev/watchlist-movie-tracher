import React ,{useContext}from "react";
import { GlobalContext } from "./context/GlobalContext";

const MovieCardGeneralButtons = ({ movie, type }) => {

    const{deleteMovieFromWatchList,moveMovieFromWatchListToWatched,deleteMovieFromWatched,moveMovieFromWatchedToWatchList} = useContext(GlobalContext);
    const deleteMovie = ()=>{
        deleteMovieFromWatchList(movie);
    }
    const moveToWatched = () =>{
        moveMovieFromWatchListToWatched(movie)
    }
    
  return (
    <div>
      {type === "watchlist" && (
        <div>
          <button onClick={moveToWatched}>Move to Watched</button>
          <button onClick={deleteMovie}>Remove from Watchlist</button>
        </div>
      )}
       {type === "watched" && (
        <div>
          <button onClick={()=> moveMovieFromWatchedToWatchList(movie)}>Move back to Watchlist</button>
          <button onClick={()=> deleteMovieFromWatched(movie)}>Delete the Movie</button>
        </div>
      )}
    </div>
  );
};

export default MovieCardGeneralButtons;
