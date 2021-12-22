import React from "react";
import { Link } from "react-router-dom";

const Description = (props) => {
  console.log("props", props);
  console.log("match", props.match);
  console.log("moviesToDisplay", props.moviesToDisplay);
  var movie = props.moviesToDisplay.find(
    (movie) => movie.id == props.match.params.movieId
  );
  var movieData;
  if (movie)
    movieData = (
      <div>
        <div>{movie.description}</div>
        {/* <video width="750" height="500" controls><source src={movie.trailerLink}></source></video> */}
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
      <Link to="/">back to home</Link>
    </div>
  );
};

export default Description;
