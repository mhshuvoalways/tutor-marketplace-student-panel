import Button from "@/app/components/common/button/Button2";
import Rating from "@/app/components/common/rating";
import Avaiability from "@/app/components/tutor/Availablity";
import Parse from "html-react-parser";
import { CircleCheckBig, MapPin, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Tutors = ({ tutor, availability }) => {
  return (
    <div className="bg-white shadow rounded p-5">
      <div className="flex flex-wrap md:flex-nowrap items-start gap-y-5 gap-x-10">
        <div className="w-full md:w-3/12">
          <Image
            src={tutor?.avatar?.url}
            alt=""
            className="size-full mx-auto rounded object-cover"
            width={500}
            height={500}
          />
          <Link href={`/tutors/${tutor.user}`}>
            <Button title=" View Profile" />
          </Link>
        </div>
        <div className="w-full md:w-9/12">
          <div className="flex gap-x-5 flex-wrap sm:flex-nowrap justify-between">
            <div>
              <div className="flex items-center gap-x-2">
                <h4 className="text-lg font-semibold font-outfit">
                  {tutor.name}
                </h4>
                <CircleCheckBig className="size-5 text-green-500" />
              </div>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-1 text-gray-500">
                  <MapPin />
                  <span>{tutor.location}</span>
                </div>
                <div className="flex items-center gap-x-1.5 font-outfit">
                  <p className="font-semibold">{tutor.averageReview || 0}</p>
                  <Rating value={tutor.averageReview || 0} />
                  <p className="text-gray-500">({tutor.totalReviews || 0})</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 w-full sm:w-auto rounded sm:rounded-none py-2 px-4 sm:py-0 sm:px-0 flex sm:block justify-between bg-slate-100 sm:bg-white">
              <p className="text-gray-500">Starting from:</p>
              <p className="font-semibold text-secondary text-lg font-outfit">
                ${tutor.hourlyRate}.00/hr
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {tutor.grades?.map((grade) => (
              <small
                key={grade._id}
                className="bg-slate-100 rounded px-3 py-1 font-bold text-gray-500"
              >
                {grade.item}
              </small>
            ))}
          </div>
          <Avaiability tutor={tutor} availability={availability} />
          <div className="mt-5">
            <p className="font-outfit">
              You can get teaching service direct at
            </p>
            <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-3 text-nowrap">
              {tutor.availableOn?.map((method, index) => (
                <div
                  className="inline-flex items-center justify-center gap-x-3 sm:gap-x-5 bg-slate-50 py-2 px-3 w-full rounded"
                  key={index}
                >
                  {method === "Online" && <Video className="text-red-400" />}
                  {method === "Offline" && <MapPin className="text-blue-400" />}
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
            {tutor.subjects?.map((subject) => (
              <small
                key={subject._id}
                className="bg-slate-100 rounded px-3 py-1 font-bold text-gray-500"
              >
                {subject.item}
              </small>
            ))}
          </div>
          <p className="mt-5 text-gray-500 line-clamp-2">
            {tutor.bio && Parse(tutor.bio)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
