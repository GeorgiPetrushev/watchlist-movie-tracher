import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardGeneral from "./MovieCardGeneral";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div>
      <div>My Watchlist</div>
      <div>
        {" "}
        You have {watchlist.length}{" "}
        {watchlist.length === 1 ? "Movie" : "Movies"} in your Watchlist
      </div>

      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((movie) => {
            return (
              <MovieCardGeneral key={movie.id} movie={movie} type="watchlist" />
            );
          })}
        </div>
      ) : (
        <div><div>There is no movies added in section Watchlist. </div><div>If you want to add some movies pred this button <Link to="/add-movie" className="add">+Add</Link></div></div>
      )}
    </div>
  );
};

export default WatchList;
