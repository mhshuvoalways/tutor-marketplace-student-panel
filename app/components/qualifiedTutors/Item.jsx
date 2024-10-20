import Rating from "@/app/components/common/rating";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const Item = ({ image, name, jobTitle, startingFrom, grade, subject }) => {
  return (
    <div className="border hover:shadow-lg transition-all rounded bg-white space-y-6 w-full sm:w-[95%] mx-auto p-5 font-outfit">
      <div className="flex items-center gap-2">
        <Image src={image} alt="" className="size-14 rounded-full" />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold">{name}</h4>
            <CircleCheckBig className="size-5 text-green-500" />
          </div>
          <div className="flex items-center gap-2">
            <span>{jobTitle}</span>
            <Rating value={4.5} activeColor="#ef4444" size={24} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-1">
          <p className="text-gray-500">Starting from:</p>
          <p className="font-semibold">${startingFrom}.00/hr</p>
        </div>
        <div className="flex items-center justify-between gap-1">
          <p className="text-gray-500">Grade:</p>
          <p className="font-semibold">{grade}</p>
        </div>
        <div className="flex items-center justify-between gap-1">
          <p className="text-gray-500">Subject:</p>
          <p className="font-semibold">{subject}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
