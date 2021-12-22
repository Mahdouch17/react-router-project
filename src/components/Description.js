import React from "react";
import { Link } from "react-router-dom";

const Description = (props) => {
  var movie = props.moviesToDisplay.find(
    (movie) => movie.title === props.match.params.movieTitle
  );
  var movieData;
  if (movie)
    movieData = (
      <div>
        <h2>Description page</h2>
        <div>{movie.description}</div>
        <iframe
          width="853"
          height="480"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          src={movie.trailerLink}
        />
      </div>
    );
  else movieData = <h2> Sorry. Movie doesn't exist </h2>;
  return (
    <div>
      {movieData}
      <Link to="/"><h3>back to home</h3></Link>
    </div>
  );
};

export default Description;
