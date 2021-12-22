import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList(props) {
  console.log("match", props.match);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.moviesToDisplay.map((movie) => (
          <Link to={`/${movie.title}`}>
            <MovieCard key={movie.id} value={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
