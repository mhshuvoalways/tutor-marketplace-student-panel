const getDuration = (startTime, endTime) => {
  const formatTime = (time) => {
    const [timeString, modifier] = time.split(/(AM|PM)/);
    const [hours, minutes] = timeString.split(":").map(Number);
    const hours24 =
      modifier === "PM" && hours !== 12
        ? hours + 12
        : modifier === "AM" && hours === 12
        ? 0
        : hours;
    return new Date(0, 0, 0, hours24, minutes);
  };
  const calculateDifference = (start, end) => {
    const startDate = formatTime(start);
    const endDate = formatTime(end);
    const differenceInMillis = endDate - startDate;
    if (differenceInMillis < 0) {
      endDate.setDate(endDate.getDate() + 1);
    }
    const totalMinutes = Math.floor((endDate - startDate) / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  };
  const { hours, minutes } = calculateDifference(startTime, endTime);
  return `${String(hours)}:${String(minutes)}`;
};

export default getDuration;
