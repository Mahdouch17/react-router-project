import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Filter = ({ keyword, handleFilter, rating, handleRating }) => {
  return (
    <div>
      Filter the movies by title and rating :
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={keyword}
            onChange={handleFilter}
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
    </div>
  );
};

export default Filter;
