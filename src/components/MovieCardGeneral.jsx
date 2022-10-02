import React from "react";

const MovieCardGeneral = ({movie,type}) => {
  return (
    <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=" missing"
          ></img>
        ) : (
          <div>{movie.title}</div>
        )}
        <div>{movie.title}</div>

        <div>{movie.release_date ? movie.release_date.slice(0, 4) : ""}</div>
        <button> Add to Watched</button>
        <button>Remove</button>

    </div>
  );
};

export default MovieCardGeneral;
