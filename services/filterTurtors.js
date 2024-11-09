import calculateDistance from "@/services/calculateDistance";

const filterTutors = (result, searchValue) => {
  const filteredTutors = result.filter((tutor) => {
    const isLocationMatch =
      !searchValue.address || tutor.location?.address === searchValue.address;

    const isOnlineMatch =
      !searchValue.method || tutor.availableOn.includes(searchValue.method);

    const isWithinRadius =
      searchValue.method !== "In-Person" ||
      (searchValue.lat &&
        searchValue.lng &&
        calculateDistance(
          Number(searchValue.lat),
          Number(searchValue.lng),
          Number(tutor.location?.lat),
          Number(tutor.location?.lng)
        ) <= tutor.miles);

    const isGradeMatch =
      !searchValue.grade ||
      tutor.grades.some((grade) => grade.item === searchValue.grade);

    const isSubjectMatch =
      !searchValue.subject ||
      tutor.subjects.some((subject) => subject.item === searchValue.subject);

    const isRatingMatch =
      !searchValue.rating || tutor.averageReview >= searchValue.rating;

    const isPriceRangeMatch =
      (!searchValue.minRange || tutor.hourlyRate >= searchValue.minRange) &&
      (!searchValue.maxRange || tutor.hourlyRate <= searchValue.maxRange);

    return (
      isLocationMatch &&
      isOnlineMatch &&
      isWithinRadius &&
      isGradeMatch &&
      isSubjectMatch &&
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

  return sortedTutors;
};

export default filterTutors;
