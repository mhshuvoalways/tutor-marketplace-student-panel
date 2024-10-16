"use client";

import Dialog from "@/app/components/common/dialog";
import AddReview from "@/app/components/account/booking/AddReview";
import { useState } from "react";

const ReviewTh = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      dialogTitle="Write a review"
      dialogBtn={
        <p className="cursor-pointer hover:text-primary">write a review</p>
      }
    >
      <AddReview />
    </Dialog>
  );
};

export default ReviewTh;
