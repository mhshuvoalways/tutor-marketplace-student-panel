import convertScheduleFormat from "@/services/convertScheduleFormat";

const Availablity = ({ availability, tutor }) => {
  const filterByUser = convertScheduleFormat(
    availability.filter((el) => el.user === tutor.user)
  );

  return (
    <div className="font-outfit flex flex-wrap md:flex-nowrap gap-x-4 gap-y-2 mt-5">
      <p>Availability</p>
      <div className="flex flex-wrap items-center gap-3">
        {filterByUser.map((avil, index) => {
          return (
            <small
              key={index}
              className="bg-green-50 rounded px-1 md:px-3 py-1 border uppercase"
            >
              {avil.day.slice(0, 3)}
            </small>
          );
        })}
      </div>
    </div>
  );
};

export default Availablity;
