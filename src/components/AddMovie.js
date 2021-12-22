import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function AddMovie({ addMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
  });
  const [rating,setRating] = useState(0)
  const handleRating = (e) => setRating(e);
  const handleMovie = (e) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.floor(Math.random() * 1000),
      title: movie.title,
      description: movie.description,
      posterURL: movie.posterURL,
      rating: rating/20,
    };
    addMovie(newMovie);
  };
  return (
    <div>
      <h1>Add a movie in the fields below : </h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={movie.description}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="posterURL"
              value={movie.posterURL}
              onChange={handleMovie}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <Rating
              name="rating"
              onClick={handleRating}
              ratingValue={rating}
              allowHalfIcon
            />
          </label>
        </div>
        <div>
          <input type="submit" value={"Add"} />
        </div>
      </form>
    </div>
  );
}
export default AddMovie;
