import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardGeneral from "./MovieCardGeneral";
import { Link } from "react-router-dom";
import WatchedAndWatchlistStyle from "./style/WatchedAndWatchlistStyle";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <WatchedAndWatchlistStyle>
      <div className="top">
        <h2 className="top-left">My Watchlist</h2>
        <div className="top-right">
          {" "}
         {watchlist.length}{" "}
          {watchlist.length === 1 ? "Movie" : "Movies"}
        </div>
      </div>

      {watchlist.length > 0 ? (
        <div className="main-section">
          {watchlist.map((movie) => {
            return (
              <MovieCardGeneral key={movie.id} movie={movie} type="watchlist" />
            );
          })}
        </div>
      ) : (
        <div className="main-section">
          <div>There is no movies added in section Watchlist. </div>
          <div>
            If you want to add some movies pred{" "}
            <Link to="/add-movie" className="add">
              Here
            </Link>
            .
          </div>
        </div>
      )}
    </WatchedAndWatchlistStyle>
  );
};

export default WatchList;
