import Search from "@/app/components/common/search";
import MainFilter from "@/app/components/filter/MainFilter";
import Tutors from "@/app/components/filter/Tutors";
import ShapeImage from "@/public/images/shape.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className="container mx-auto px-5 py-20">
      <p className="text-4xl font-medium font-outfit">6 search results found</p>
      <div className="flex items-center gap-5 mt-10">
        <div className="w-full">
          <Search />
        </div>
        <div className="lg:flex items-center gap-5 hidden">
          <Image src={ShapeImage} alt="" />
          <p className="text-nowrap font-gochiHand">Start from here</p>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <MainFilter />
        <div className="w-full xl:w-9/12 space-y-5">
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
        </div>
      </div>
    </div>
  );
};

export default Index;
