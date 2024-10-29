import Rating from "@/app/components/common/rating";
import moment from "moment";
import Image from "next/image";

const Reviws = ({ bookings }) => {
  const isReview = bookings.filter((el) => el.review);

  return (
    <div className="bg-white shadow rounded p-5 mt-10 font-outfit">
      <p className="text-2xl">
        {`Reviews`} ({isReview.length || 0})
      </p>
      <div>
        {isReview.length ? (
          bookings.map(
            (rating) =>
              rating.review && (
                <div
                  className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5"
                  key={rating._id}
                >
                  <Image
                    src={rating.studentProfile?.avatar?.url}
                    alt=""
                    className="rounded size-16"
                    width={500}
                    height={500}
                  />
                  <div>
                    <div className="flex items-center gap-4">
                      <p className="text-lg">{rating.studentProfile?.name}</p>
                      <p className="text-gray-500">
                        {moment(rating.createdAt).fromNow()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{rating.review}.0</p>
                      <Rating size={24} value={rating.review} />
                    </div>
                    <p className="mt-3 text-gray-500">{rating.reviewText}</p>
                  </div>
                </div>
              )
          )
        ) : (
          <p className="py-5 text-center">No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default Reviws;
