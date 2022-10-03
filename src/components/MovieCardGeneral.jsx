import React from "react";
import MovieCardGeneralButtons from "./MovieCardGeneralButtons";

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
          <MovieCardGeneralButtons movie={movie} type={type}/>

    </div>
  );
};

export default MovieCardGeneral;
