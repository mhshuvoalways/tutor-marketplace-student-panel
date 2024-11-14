import ReviewTh from "@/app/components/account/booking/ReviewTh";
import Rating from "@/app/components/common/rating";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Booking = ({ result, bookingId }) => {
  // console.log(result);

  return (
    <div className="bg-white rounded shadow-sm p-5 overflow-x-auto">
      {result.length ? (
        <table className="w-full text-nowrap">
          <thead>
            <tr>
              <th className="text-left border-b pb-5 px-5">Tutor Image</th>
              <th className="text-left border-b pb-5 px-5">Tutor Name</th>
              <th className="text-left border-b pb-5 px-5">Tutor Email</th>
              <th className="text-left border-b pb-5 px-5">Date</th>
              <th className="text-left border-b pb-5 px-5">Starting Time</th>
              <th className="text-left border-b pb-5 px-5">Session</th>
              <th className="text-left border-b pb-5 px-5">Fee</th>
              <th className="text-left border-b pb-5 px-5">Review</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el) => (
              <tr key={el._id}>
                <td className="text-left border-b py-5 px-5">
                  <Image
                    src={el.tutorProfile?.avatar?.url}
                    alt=""
                    className="rounded size-16"
                    width={200}
                    height={200}
                  />
                </td>
                <td className="text-left border-b py-5 px-5">
                  {el.tutorProfile?.name}
                </td>
                <td className="text-left border-b py-5 px-5">
                  {el.tutorProfile?.email}
                </td>
                <td className="text-left border-b py-5 px-5">
                  {moment(el.date).format("LL")}
                </td>
                <td className="text-left border-b py-5 px-5">
                  {el.startedTime}
                </td>
                <td className="text-left border-b py-5 px-5">
                  {el.session} hr
                </td>
                <td className="text-left border-b py-5 px-5">${el.fee}</td>

                <td className="text-left border-b py-5 px-5">
                  <div>
                    {el.review ? (
                      <>
                        <Rating value={el.review} />
                        <p className="text-wrap">{el?.reviewText}</p>
                      </>
                    ) : (
                      <Link href={`/all-booking?bookingId=${el._id}`}>
                        <ReviewTh bookingId={bookingId} />
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-xl">No booking yet</p>
      )}
    </div>
  );
};

export default Booking;
