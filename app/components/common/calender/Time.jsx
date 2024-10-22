import Button1 from "@/app/components/common/button/Button1";
import convertTimeToMinutes from "@/services/convertTimeToMinutes";
import getDuration from "@/services/getDuration";
import { useEffect, useState } from "react";

const Time = ({ timeSlots, hourlyRate, submitHander }) => {
  const [startedTime, setStartedTime] = useState("");
  const [endedTime, setEndedTime] = useState("");
  const [calculate, setCalculate] = useState({
    session: "",
    fee: 0,
  });

  useEffect(() => {
    if (!startedTime) {
      setStartedTime(timeSlots.startedTime);
    }
    if (!endedTime) {
      setEndedTime(timeSlots.endedTime);
    }
  }, [endedTime, startedTime, timeSlots.endedTime, timeSlots.startedTime]);

  const session = getDuration(startedTime, endedTime);
  const fee = (convertTimeToMinutes(session) / 60) * hourlyRate;

  useEffect(() => {
    setCalculate({
      session,
      fee,
    });
  }, [fee, session]);

  return (
    <div>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between text-center gap-2">
        <div className="flex items-center justify-center gap-2 w-full sm:w-8/12">
          <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
            {startedTime}
          </p>
          <p>-</p>
          <p className="border cursor-pointer rounded hover:border-primary p-2 w-full">
            {endedTime}
          </p>

          {calculate.fee && calculate.session && (
            <p className="font-semibold text-secondary text-lg">
              ${calculate.fee}/{calculate.session}
            </p>
          )}
        </div>
        <div className="w-full sm:w-4/12">
          <Button1
            title={"Book"}
            className={
              "!bg-green-500 hover:!bg-green-600 border border-green-600"
            }
            onClick={() =>
              submitHander(startedTime, endedTime, session, Number(fee))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Time;
