import Input from "@/app/components/common/input/Input";
import Rating from "@/app/components/common/rating";

const AddReview = () => {
  return (
    <div className="space-y-5">
      <Rating size={24} value={5} edit={true} />
      <Input placeholder={"write a review"} />
    </div>
  );
};

export default AddReview;
