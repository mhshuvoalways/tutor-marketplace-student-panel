import Search from "@/app/components/common/search";
import MainFilter from "@/app/components/filter/MainFilter";
import Tutors from "@/app/components/filter/Tutors";
import ShapeImage from "@/public/images/shape.png";
import convertScheduleFormat from "@/services/convertScheduleFormat";
import Image from "next/image";

const Index = async ({ searchValue }) => {
  const response = await fetch(`${process.env.BASE_URL}/api/tutor`, {
    cache: "no-store",
  });

  const availability = await fetch(`${process.env.BASE_URL}/api/availability`, {
    cache: "no-store",
  });

  const result = await response.json();
  const resultAvailability = convertScheduleFormat(await availability.json());

  const filteredTutors = result.filter((tutor) => {
    const isLocationMatch =
      !searchValue.address || tutor.location === searchValue.address;

    const isGradeMatch =
      !searchValue.grade ||
      tutor.grades.some((grade) => grade.item === searchValue.grade);

    const isSubjectMatch =
      !searchValue.subject ||
      tutor.subjects.some((subject) => subject.item === searchValue.subject);

    const isGenderMatch =
      !searchValue.gender || tutor.gender === searchValue.gender;

    const isRatingMatch =
      !searchValue.rating || tutor.rating >= searchValue.rating;

    const isPriceRangeMatch =
      (!searchValue.minRange || tutor.hourlyRate >= searchValue.minRange) &&
      (!searchValue.maxRange || tutor.hourlyRate <= searchValue.maxRange);

    return (
      isLocationMatch &&
      isGradeMatch &&
      isSubjectMatch &&
      isGenderMatch &&
      isRatingMatch &&
      isPriceRangeMatch
    );
  });

  const sortedTutors = searchValue.sort
    ? filteredTutors.sort((a, b) =>
        searchValue.sort === "Price low to high"
          ? a.hourlyRate - b.hourlyRate
          : b.hourlyRate - a.hourlyRate
      )
    : filteredTutors;

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
