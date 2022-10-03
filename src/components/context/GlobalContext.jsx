import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// main state checking to see if there is something in the local store to add preventing to lose data if refresh the page
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create global context
export const GlobalContext = createContext(initialState);

//create global provider
export const GlobalProvider = (prop) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //update data in local store is state change
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // functions for reducer
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const deleteMovieFromWatchList = (movie) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHLIST", payload: movie });
  };
  const moveMovieFromWatchListToWatched = (movie) => {
    dispatch({ type: "MOVE_MOVIE_FROM_WATCHLIST_TO_WATCHED", payload: movie });
  };
  const deleteMovieFromWatched = (movie) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHED", payload: movie });
  };
  const moveMovieFromWatchedToWatchList = (movie) => {
    dispatch({ type: "MOVE_MOVIE_FROM_WATCHED_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
        deleteMovieFromWatchList: deleteMovieFromWatchList,
        moveMovieFromWatchListToWatched: moveMovieFromWatchListToWatched,
        deleteMovieFromWatched: deleteMovieFromWatched,
        moveMovieFromWatchedToWatchList: moveMovieFromWatchedToWatchList,
      }}
    >
      {prop.children}
    </GlobalContext.Provider>
  );
};
