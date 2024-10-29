"use client";

import AddReview from "@/app/components/account/booking/AddReview";
import Dialog from "@/app/components/common/dialog";
import { clearError, writeReview } from "@/store/features/reviewSlice";
import { useAppDispatch } from "@/store/hook";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ReviewTh = ({ bookingId }) => {
  const [reviewValus, setReviewValues] = useState({
    review: 0,
    reviewText: "",
  });

  const dispatch = useAppDispatch();
  const router = useRouter();

  const ratingChanged = (review) => {
    dispatch(clearError());
    setReviewValues({
      ...reviewValus,
      review: review,
    });
  };

  const textChange = (event) => {
    dispatch(clearError());
    setReviewValues({
      ...reviewValus,
      reviewText: event.target.value,
    });
  };

  const submitHandler = async () => {
    const obj = reviewValus;
    obj.id = bookingId;
    const result = await dispatch(writeReview(obj));
    if (result.type.includes("fulfilled")) {
      setReviewValues({
        review: 0,
        reviewText: "",
      });
      router.push("/all-booking");
      router.refresh();
    }
  };

  return (
    <Dialog
      dialogTitle="Write a review"
      dialogBtn={
        <p className="cursor-pointer hover:text-primary">write a review</p>
      }
      submitHandler={submitHandler}
    >
      <AddReview
        reviewValus={reviewValus}
        ratingChanged={ratingChanged}
        textChange={textChange}
      />
    </Dialog>
  );
};

export default ReviewTh;
