import Slide from "@/app/components/qualifiedTutors/Slide";
import ZigzaglineImage from "@/public/icons/zigzagline.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <Image src={ZigzaglineImage} alt="" className="mx-auto" />
        <div className="text-center w-7/12 mx-auto mt-4">
          <p className="text-2xl font-outfit">Our featured tutors</p>
          <p className="text-4xl font-medium mt-2 font-outfit">
            Highly qualified professionals
          </p>
          <p className="mt-4 text-gray-500">
            We accuse and bring to judgment those who are worthy of judgment,
            softened and corrupted by the flattery of present pleasures, whose
            pains and troubles they are about to experience, darkened by greed
            that does not provide mikume.
          </p>
        </div>
        <div className="mt-10">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default index;
