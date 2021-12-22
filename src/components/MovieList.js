import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Link, Route } from "react-router-dom";
import Description from "./Description";

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
          <Link to={`/${movie.id}`}>
            <MovieCard key={movie.id} value={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
