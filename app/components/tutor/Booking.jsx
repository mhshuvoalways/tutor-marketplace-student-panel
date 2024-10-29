"use client";

import Calendly from "@/app/components/common/calender";
import Time from "@/app/components/common/calender/Time";
import Loading from "@/public/icons/spinner.svg";
import getTimeSlots from "@/services/getTimeSlots";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const BookTutor = ({ tutorProfile, availability, hourlyRate, session }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [busySlots, setBusySlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const cardOnChange = (event) => {
    setIsCardComplete(event.complete);
    setPaymentError("");
  };

  const submitHander = async (startedTime, endedTime) => {
    if (!isCardComplete) {
      setPaymentError("Please complete your card details.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tutorId: tutorProfile.user,
        tutorName: tutorProfile.name,
        date: selectedDate,
        startedTime,
        endedTime,
        hourlyRate,
        session,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });
    if (res.status === 200) {
      const { clientSecret } = await res.json();
      if (clientSecret) {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
        if (result.error) {
          setLoading(false);
          setPaymentError(result.error.message);
        } else {
          setLoading(false);
          router.push("/all-booking");
        }
      }
    } else {
      setLoading(false);
      const { message } = await res.json();
      setPaymentError(message);
    }
  };

  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();

  const dateHandler = async (date) => {
    setLoading(true);
    setSelectedDate(date);
    setPaymentError("");
    if (date) {
      const response = await fetch(`/api/booking/${date}`, {
        method: "POST",
        body: JSON.stringify({ tutorId: tutorProfile.user }),
      });
      const result = await response.json();
      setLoading(false);
      setBusySlots(result);
    }
  };

  useEffect(() => {
    if (!selectedDate) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      dateHandler(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const getAvailibility = availability.find((av) => av.day === days[dayOfWeek]);
  let finalResult = [];
  if (selectedDate && getAvailibility && !loading) {
    finalResult = getTimeSlots(getAvailibility.time, busySlots, session);
  }

  return (
    <div className="shadow bg-white rounded p-5 space-y-5 font-outfit booking transition-all">
      <Calendly dateHandler={dateHandler} />
      {loading ? (
        <Image src={Loading} alt="loading" className="mx-auto" />
      ) : finalResult.length ? (
        finalResult.map((el, index) => (
          <Time
            key={index}
            timeSlots={el}
            hourlyRate={hourlyRate}
            submitHander={submitHander}
            isBookClicked={loading}
          />
        ))
      ) : (
        <p className="text-center text-lg pt-2 text-red-400">Not available</p>
      )}
      <div>
        <CardElement
          onChange={cardOnChange}
          className={`border rounded px-2 py-4 ${
            paymentError
              ? "border-red-400 hover:border-red-400"
              : "hover:border-primary"
          }`}
        />
        {paymentError && <p className="text-red-400 mt-2">{paymentError}</p>}
      </div>
      {loading && <p className="inset-0 fixed z-50"></p>}
    </div>
  );
};

const WrappedBookTutor = (props) => (
  <Elements stripe={stripePromise}>
    <BookTutor {...props} />
  </Elements>
);

export default WrappedBookTutor;
