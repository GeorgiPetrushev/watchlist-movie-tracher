import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCardGeneral from "./MovieCardGeneral";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <div>Watched movies</div>
      {watched.length > 0 ? (
        <div>
          {watched.map((movie) => (
            <MovieCardGeneral  key={movie.id} movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <div>No movies in section Watched</div>
      )}
    </div>
  );
};

export default Watched;
