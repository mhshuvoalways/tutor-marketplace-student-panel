import Rating from "@/app/components/common/rating";
import TutorImage from "@/public/images/tutor.jpg";
import { CircleCheckBig, MapPin, Video } from "lucide-react";
import Image from "next/image";

const days = ["MON", "TUE", "WEB", "THU", "FRI", "SAT", "SUN"];
const subjectsItems = [
  { id: 1, name: "Science" },
  { id: 2, name: "Math" },
  { id: 3, name: "English" },
  { id: 4, name: "Accounting" },
  { id: 5, name: "Programming" },
];

const Tutors = () => {
  return (
    <div className="bg-white shadow rounded p-5">
      <div className="flex flex-wrap md:flex-nowrap items-end gap-y-5 gap-x-10">
        <div className="w-full md:w-3/12">
          <Image
            src={TutorImage}
            alt=""
            className="size-full mx-auto rounded object-cover"
          />
        </div>
        <div className="w-full md:w-9/12">
          <div className="flex gap-x-5 flex-wrap sm:flex-nowrap justify-between">
            <div>
              <div className="flex items-center gap-x-2">
                <h4 className="text-lg font-semibold font-outfit">
                  Arianne Kearns
                </h4>
                <CircleCheckBig className="size-5 text-green-500" />
              </div>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-1 text-gray-500">
                  <MapPin />
                  <span>Charlotte, UK</span>
                </div>
                <div className="flex items-center gap-x-1.5 font-outfit">
                  <p className="font-semibold">5.0</p>
                  <Rating
                    value={4.5}
                    count={1}
                    activeColor="#facc15"
                    size={24}
                  />
                  <p className="text-gray-500">(06)</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 w-full sm:w-auto rounded sm:rounded-none py-2 px-4 sm:py-0 sm:px-0 flex sm:block justify-between bg-slate-100 sm:bg-white">
              <p className="text-gray-500">Starting from:</p>
              <p className="font-semibold text-secondary text-lg font-outfit">
                ${23}.00/hr
              </p>
            </div>
          </div>
          <div className="font-outfit flex flex-wrap md:flex-nowrap gap-x-4 gap-y-2 mt-5">
            <p>Availability</p>
            <div className="flex flex-wrap items-center gap-3">
              {days.map((d) => (
                <small
                  key={d}
                  className="bg-green-50 rounded px-1 md:px-3 py-1 border"
                >
                  {d}
                </small>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-outfit">
              You can get teaching service direct at
            </p>
            <div className="mt-2 grid grid-cols-2 xl:grid-cols-4 gap-3 text-nowrap">
              <div className="inline-flex items-center justify-center gap-x-2 bg-slate-50 py-2 px-3 w-full rounded">
                <div>
                  <Video className="text-red-400" />
                </div>
                <p>Online</p>
              </div>
              <div className="inline-flex items-center justify-center gap-x-2 bg-slate-50 py-2 px-3 w-full rounded">
                <div>
                  <MapPin className="text-blue-400" />
                </div>
                <p>Offline</p>
              </div>
              <div className="inline-flex items-center justify-center gap-x-2 bg-slate-50 py-2 px-3 w-full rounded">
                <div>
                  <MapPin className="text-red-400" />
                </div>
                <p>Student place</p>
              </div>
              <div className="inline-flex items-center justify-center gap-x-2 bg-slate-50 py-2 px-3 w-full rounded">
                <div>
                  <MapPin className="text-red-400" />
                </div>
                <p>Tutor place</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {subjectsItems.map((subject) => (
              <small
                key={subject.id}
                className="bg-slate-100 rounded px-3 py-1 font-bold text-gray-500"
              >
                {subject.name}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
