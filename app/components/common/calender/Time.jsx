import Button1 from "@/app/components/common/button/Button1";
import { useEffect, useState } from "react";

const Time = ({ timeSlots, submitHander, isBookClicked }) => {
  const [startedTime, setStartedTime] = useState("");
  const [endedTime, setEndedTime] = useState("");

  useEffect(() => {
    if (!startedTime) {
      setStartedTime(timeSlots.startedTime);
    }
    if (!endedTime) {
      setEndedTime(timeSlots.endedTime);
    }
  }, [endedTime, startedTime, timeSlots.endedTime, timeSlots.startedTime]);

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between text-center gap-2">
      <div className="flex items-center justify-center gap-2 w-full sm:w-8/12">
        <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
          {startedTime}
        </p>
        <p>-</p>
        <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
          {endedTime}
        </p>
      </div>
      <div className="w-full sm:w-4/12">
        <Button1
          title={"Book"}
          className={
            "!bg-green-500 hover:!bg-green-600 border border-green-600"
          }
          isClicked={isBookClicked}
          icon={true}
          onClick={() => submitHander(startedTime, endedTime)}
        />
      </div>
    </div>
  );
};

export default Time;
