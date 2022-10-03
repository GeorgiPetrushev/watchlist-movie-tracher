import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { AiFillDelete } from "react-icons/ai";
import MovieCardGeneralButtonsStyle from "./style/MovieCardGeneralButtonsStyle";

const MovieCardGeneralButtons = ({ movie, type }) => {
  const {
    deleteMovieFromWatchList,
    moveMovieFromWatchListToWatched,
    deleteMovieFromWatched,
    moveMovieFromWatchedToWatchList,
  } = useContext(GlobalContext);

  return (
    <MovieCardGeneralButtonsStyle>
      {type === "watchlist" && (
        <div className="container-btn">
          <button
            className="btn add-btn"
            onClick={() => moveMovieFromWatchListToWatched(movie)}
          >
            Move to Watched
          </button>
          <button
            className="btn delete"
            onClick={() => deleteMovieFromWatchList(movie)}
          >
            <AiFillDelete />
          </button>
        </div>
      )}
      {type === "watched" && (
        <div className="container-btn">
          <button
            className="btn add-btn"
            onClick={() => moveMovieFromWatchedToWatchList(movie)}
          >
            Move back to Watchlist
          </button>
          <button className="btn delete" onClick={() => deleteMovieFromWatched(movie)}>
            <AiFillDelete />
          </button>
        </div>
      )}
    </MovieCardGeneralButtonsStyle>
  );
};

export default MovieCardGeneralButtons;
