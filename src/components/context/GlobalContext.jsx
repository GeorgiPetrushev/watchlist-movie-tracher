import { createContext, useReducer } from "react";
import {AppReducer }from "./AppReducer";

const initialState = {
  watchlist: [],
  watched: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (prop) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
      }}
    >
      {prop.children}
    </GlobalContext.Provider>
  );
};
