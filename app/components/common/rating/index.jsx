"use client";

import Rating from "react-rating";

const index = ({ value = 5, edit, ratingChanged }) => {
  return (
    <Rating
      initialRating={value}
      emptySymbol="fa-regular fa-star"
      readonly={edit ? false : true}
      fullSymbol="fa-solid fa-star"
      fractions={2}
      className="text-yellow-500 text-xl"
      onChange={ratingChanged}
    />
  );
};

export default index;
