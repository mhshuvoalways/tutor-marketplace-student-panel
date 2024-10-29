import Booking from "@/app/components/tutor/Booking";
import OverView from "@/app/components/tutor/OverView";
import Reviws from "@/app/components/tutor/Reviws";
import TutorDetails from "@/app/components/tutor/TutorDetails";
import { SessionProvider } from "next-auth/react";

const Index = async ({ tutorId }) => {
  const response = await fetch(`${process.env.BASE_URL}/api/tutor/${tutorId}`, {
    cache: "no-store",
  });

  const result = await response.json();

  if (response.status !== 200) {
    return null;
  } else {
    return (
      <div className="container mx-auto px-5 py-20 flex flex-wrap lg:flex-nowrap gap-5">
        <div className="w-full lg:w-8/12 space-y-5">
          <OverView result={result} />
          <TutorDetails result={result} />
          <Reviws bookings={result.bookings} />
        </div>
        <div className="w-full lg:w-4/12">
          <SessionProvider>
            <Booking
              availability={result.availability}
              hourlyRate={result.hourlyRate}
              session={result.session}
              tutorProfile={result}
            />
          </SessionProvider>
        </div>
      </div>
    );
  }
};

export default Index;
