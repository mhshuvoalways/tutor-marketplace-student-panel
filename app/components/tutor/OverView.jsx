import Rating from "@/app/components/common/rating";
import { CircleCheckBig, MapPin, Video } from "lucide-react";
import Image from "next/image";

const Tutors = ({ result }) => {
  let totalReviews = 0;
  let reviewsLength = 0;

  result.bookings.map((el) => {
    if (el.review) {
      totalReviews = totalReviews + el.review;
      reviewsLength++;
    }
  });

  return (
    <div className="bg-white shadow rounded p-5">
      <div className="flex flex-wrap md:flex-nowrap items-start gap-y-5 gap-x-10">
        <div className="w-full md:w-3/12">
          <Image
            src={result?.avatar?.url}
            alt="Avatar"
            className="size-full mx-auto rounded object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-9/12">
          <div className="flex gap-x-5 flex-wrap sm:flex-nowrap justify-between">
            <div>
              <div className="flex items-center gap-x-2">
                <h4 className="text-lg font-semibold font-outfit">
                  {result?.name}
                </h4>
                <CircleCheckBig className="size-5 text-green-500" />
              </div>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-1 text-gray-500">
                  <MapPin />
                  <span>{result?.location}</span>
                </div>
                <div className="flex items-center gap-x-1.5 font-outfit">
                  <p className="font-semibold">
                    {(totalReviews / reviewsLength).toFixed(2) || 0}
                  </p>
                  <Rating value={totalReviews / reviewsLength || 0} />
                  <p className="text-gray-500">({reviewsLength || 0})</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 w-full sm:w-auto rounded sm:rounded-none py-2 px-4 sm:py-0 sm:px-0 flex sm:block justify-between bg-slate-100 sm:bg-white">
              <p className="text-gray-500">Starting from:</p>
              <p className="font-semibold text-secondary text-lg font-outfit">
                ${result?.hourlyRate}.00/hr
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {result.grades.map((grade) => (
              <small
                key={grade._id}
                className="bg-slate-100 rounded px-3 py-1 font-bold text-gray-500"
              >
                {grade.item}
              </small>
            ))}
          </div>
          <div className="font-outfit flex flex-wrap md:flex-nowrap gap-x-4 gap-y-2 mt-5">
            <p>Availability</p>
            {result.availability.map((avail) => (
              <div
                className="flex flex-wrap items-center gap-3"
                key={avail.day}
              >
                <small className="bg-green-50 rounded px-1 md:px-3 py-1 border uppercase">
                  {avail?.day.slice(0, 3)}
                </small>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <p className="font-outfit">
              You can get teaching service direct at
            </p>
            <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-3 text-nowrap">
              {result.availableOn.map((method, index) => (
                <div
                  className="inline-flex items-center justify-center gap-x-3 sm:gap-x-5 bg-slate-50 py-2 px-3 w-full rounded"
                  key={index}
                >
                  {method === "Online" && <Video className="text-red-400" />}
                  {method === "Tutor place" && (
                    <MapPin className="text-red-400" />
                  )}
                  {method === "Student place" && (
                    <MapPin className="text-red-400" />
                  )}
                  <p>{method}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {result.subjects.map((subject) => (
              <small
                key={subject._id}
                className="bg-slate-100 rounded px-3 py-1 font-bold text-gray-500"
              >
                {subject.item}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
