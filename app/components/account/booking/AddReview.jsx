"use client";

import Input from "@/app/components/common/input/Input";
import Rating from "@/app/components/common/rating";
import { useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";

const AddReview = ({ reviewValus, ratingChanged, textChange }) => {
  const [review, setReview] = useState();

  const { errors } = useAppSelector((store) => store.review);

  useEffect(() => {
    setReview(reviewValus.review);
  }, [reviewValus.review]);

  return (
    <div className="space-y-5">
      <div>
        <Rating value={review} edit={true} ratingChanged={ratingChanged} />
        {errors?.review && (
          <p className="text-red-400 text-left">{errors?.review}</p>
        )}
      </div>
      <div>
        <Input
          placeholder={"write a review"}
          value={reviewValus.reviewText}
          changeHandler={textChange}
        />
        {errors?.reviewText && (
          <p className="text-red-400 text-left">{errors?.reviewText}</p>
        )}
      </div>
    </div>
  );
};

export default AddReview;
