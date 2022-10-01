import React, { useState } from "react";
import AddMovieStyle from "./style/AddMovieStyle";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  const searchMovie = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovieResults(data.results);
        } else {
          setMovieResults([]);
        }
      });
  };

  return (
    <AddMovieStyle>
      {" "}
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={searchMovie}
      ></input>
      <div className="result-list">
        {movieResults.map((movie) => (
          <h1>{movie.title}</h1>
        ))}
      </div>
    </AddMovieStyle>
  );
};

export default AddMovie;
