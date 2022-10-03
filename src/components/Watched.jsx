import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardGeneral from "./MovieCardGeneral";
import WatchedAndWatchlistStyle from "./style/WatchedAndWatchlistStyle";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <WatchedAndWatchlistStyle>
      <div className="top">
        <h2 className="top-left">Watched movies</h2>
        <div className="top-right">
          {" "}
         {watched.length} {watched.length === 1 ? "Movie" : "Movies"}{" "}
        </div>
      </div>
      {watched.length > 0 ? (
        <div className="main-section">
          {watched.map((movie) => (
            <MovieCardGeneral key={movie.id} movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <div className="main-section">There is no movies added in section Watched.</div>
      )}
    </WatchedAndWatchlistStyle>
  );
};

export default Watched;
