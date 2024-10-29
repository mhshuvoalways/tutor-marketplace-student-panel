import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const index = ({ value, edit, ratingChanged }) => {
  return (
    <Rating
      key={value}
      value={Number(value)}
      readOnly={edit ? false : true}
      className="text-yellow-500 text-xl max-w-32"
      onChange={ratingChanged}
    />
  );
};

export default index;
