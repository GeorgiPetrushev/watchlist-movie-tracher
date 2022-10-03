import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const MovieCardGeneralButtons = ({ movie, type }) => {
  const {
    deleteMovieFromWatchList,
    moveMovieFromWatchListToWatched,
    deleteMovieFromWatched,
    moveMovieFromWatchedToWatchList,
  } = useContext(GlobalContext);

  return (
    <div>
      {type === "watchlist" && (
        <div>
          <button onClick={() => moveMovieFromWatchListToWatched(movie)}>
            Move to Watched
          </button>
          <button onClick={() => deleteMovieFromWatchList(movie)}>
            Remove from Watchlist
          </button>
        </div>
      )}
      {type === "watched" && (
        <div>
          <button onClick={() => moveMovieFromWatchedToWatchList(movie)}>
            Move back to Watchlist
          </button>
          <button onClick={() => deleteMovieFromWatched(movie)}>
            Delete the Movie
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCardGeneralButtons;
