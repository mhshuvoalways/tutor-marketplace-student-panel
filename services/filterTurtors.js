const filterTutors = (result, searchValue) => {
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
      !searchValue.rating || tutor.averageReview >= searchValue.rating;

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

  return sortedTutors;
};

export default filterTutors;
