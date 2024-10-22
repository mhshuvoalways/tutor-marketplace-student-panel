"use client";

import Calendly from "@/app/components/common/calender";
import Time from "@/app/components/common/calender/Time";
import getTimeSlots from "@/services/getTimeSlots";
import { useState } from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Booking = ({ tutorId, availability, hourlyRate }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [busySlots, setBusySlots] = useState([]);

  const submitHander = (startedTime, endedTime, session, fee) => {
    fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify({
        tutorId,
        selectedDate,
        startedTime,
        endedTime,
        session,
        fee,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });
  };

  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();

  const dateHandler = (date) => {
    setSelectedDate(date);
    if (date) {
      async function getBookingwithDate() {
        const response = await fetch(`/api/booking/${date}`, {
          method: "POST",
          body: JSON.stringify({ tutorId }),
        });
        setBusySlots(await response.json());
      }
      getBookingwithDate();
    }
  };

  let finalResult = [];
  const getAvailibility = availability.find((av) => av.day === days[dayOfWeek]);
  if (selectedDate && busySlots.length && getAvailibility) {
    finalResult = getTimeSlots(getAvailibility.time, busySlots, 1);
  }

  return (
    <div className="shadow bg-white rounded p-5 space-y-5 font-outfit booking">
      <Calendly dateHandler={dateHandler} />
      {finalResult.map((el, index) => (
        <Time
          key={index}
          timeSlots={el}
          hourlyRate={hourlyRate}
          submitHander={submitHander}
        />
      ))}
    </div>
  );
};

export default Booking;
