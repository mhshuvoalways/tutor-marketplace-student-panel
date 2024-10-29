import Input from "@/app/components/common/input/Input";
import Rating from "@/app/components/common/rating";
import { useAppSelector } from "@/store/hook";

const AddReview = ({ reviewValus, ratingChanged, textChange }) => {
  const { errors } = useAppSelector((store) => store.review);

  return (
    <div className="space-y-5">
      <div>
        <Rating
          value={reviewValus.review}
          edit={true}
          ratingChanged={ratingChanged}
        />
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
