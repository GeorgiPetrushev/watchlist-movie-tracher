import React from "react";
import MovieCardGeneralButtons from "./MovieCardGeneralButtons";
import MovieCardGeneralStyle from "./style/MovieCardGeneralStyle";

const MovieCardGeneral = ({ movie, type }) => {
  return (
    <MovieCardGeneralStyle>
      <div className="top-section">
        {movie.poster_path ? (
          <img
            className="left-section"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=" missing"
          ></img>
        ) : (
          <div className="left-section">{movie.title}</div>
        )}
        <div className="right-section">
          <div>
            <div>{movie.title}</div>
            <div>{movie.release_date ? movie.release_date : ""}</div>
          </div>
          <div>
            <MovieCardGeneralButtons movie={movie} type={type} />
          </div>
        </div>
      </div>
    </MovieCardGeneralStyle>
  );
};

export default MovieCardGeneral;
