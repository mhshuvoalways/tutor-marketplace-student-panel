"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  dateHandler: (date: Date) => void;
}

const Calendar: React.FC<Props> = ({ dateHandler }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const handlePrevMonth = () => {
    if (
      currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() === today.getMonth()
    ) {
      return;
    }
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      if (
        newDate.getFullYear() === today.getFullYear() &&
        newDate.getMonth() === today.getMonth() &&
        newDate.getDate() < today.getDate()
      ) {
        return;
      }
      setSelectedDate(newDate);
      dateHandler(newDate);
    }
  };

  const days = generateCalendar();

  return (
    <>
      <div className="flex justify-between items-center p-2 bg-slate-100 rounded-lg">
        <ArrowLeft
          className="size-7 cursor-pointer hover:bg-slate-200 rounded-full p-1 transition"
          onClick={handlePrevMonth}
        />
        <p className="font-medium">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <ArrowRight
          className="size-7 cursor-pointer hover:bg-slate-200 rounded-full p-1 transition"
          onClick={handleNextMonth}
        />
      </div>
      <div className="grid grid-cols-7 justify-items-center gap-2 text-center">
        {daysOfWeek.map((day) => (
          <p key={day} className="font-medium">
            {day}
          </p>
        ))}
        {days.map((day, index) => (
          <p
            key={index}
            className={`cursor-pointer rounded w-9 h-9 flex justify-center items-center transition ${
              (selectedDate &&
                day === selectedDate.getDate() &&
                currentDate.getMonth() === selectedDate.getMonth() &&
                currentDate.getFullYear() === selectedDate.getFullYear()) ||
              (!selectedDate &&
                day === today.getDate() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getFullYear() === today.getFullYear())
                ? "bg-primary text-slate-100"
                : "hover:bg-slate-200"
            } ${
              currentDate.getFullYear() === today.getFullYear() &&
              currentDate.getMonth() === today.getMonth() &&
              day &&
              day < today.getDate()
                ? "text-gray-400 cursor-default"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </p>
        ))}
      </div>
    </>
  );
};

export default Calendar;
