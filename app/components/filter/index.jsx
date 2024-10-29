import Search from "@/app/components/common/search";
import MainFilter from "@/app/components/filter/MainFilter";
import Tutors from "@/app/components/filter/Tutors";
import ShapeImage from "@/public/images/shape.png";
import filterTurtors from "@/services/filterTurtors";
import Image from "next/image";

const Index = async ({ searchValue }) => {
  const response = await fetch(`${process.env.BASE_URL}/api/tutor`, {
    cache: "no-store",
  });

  const availability = await fetch(`${process.env.BASE_URL}/api/availability`, {
    cache: "no-store",
  });

  const result = await response.json();
  const resultAvailability = await availability.json();

  const sortedTutors = filterTurtors(result, searchValue);

  return (
    <div className="container mx-auto px-5 py-20">
      <p className="text-4xl font-medium font-outfit">
        {sortedTutors.length} search results found
      </p>
      <div className="flex items-center gap-5 mt-10">
        <div className="w-full">
          <Search searchValue={searchValue} />
        </div>
        <div className="lg:flex items-center gap-5 hidden">
          <Image src={ShapeImage} alt="" />
          <p className="text-nowrap font-gochiHand">Start from here</p>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <MainFilter searchValue={searchValue} />
        <div className="w-full xl:w-9/12 space-y-5">
          {sortedTutors.length
            ? sortedTutors.map((tutor) => (
                <Tutors
                  tutor={tutor}
                  key={tutor._id}
                  availability={resultAvailability}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Index;
