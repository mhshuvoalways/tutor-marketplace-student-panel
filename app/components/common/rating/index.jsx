"use client";

import ReactStars from "react-rating-stars-component";

const index = ({
  count = 5,
  ratingChanged,
  size,
  activeColor,
  value,
  edit = false,
}) => {
  return (
    <ReactStars
      count={count}
      isHalf={true}
      edit={edit}
      onChange={ratingChanged}
      size={size}
      activeColor={activeColor}
      value={value}
    />
  );
};

export default index;
