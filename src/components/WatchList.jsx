import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardGeneral from "./MovieCardGeneral";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div>
      <h1>My Watchlist</h1>

      {watchlist.length >0 ? (      <div>
        {watchlist.map((movie) => {
          return (
            <MovieCardGeneral key={movie.id} movie={movie} type="watchlist" />
          );
        })}
      </div>): (<h1>No Movies in Watchlist</h1>)}

    </div>
  );
};

export default WatchList;
