import Booking from "@/app/components/account/booking/Booking";
import Sidebar from "@/app/components/account/sidebar";
import { authConfig } from "@/auth.config";
import NextAuth from "next-auth";

const index = async ({ bookingId }) => {
  const { auth } = NextAuth(authConfig);
  const mySession = await auth();
  const email = mySession.user.email;

  const response = await fetch(
    `${process.env.BASE_URL}/api/booking/myBooking/${email}`,
    {
      cache: "no-store",
    }
  );
  const result = await response.json();

  return (
    <div className="container mx-auto font-outfit flex flex-wrap lg:flex-nowrap gap-10 px-5">
      <Sidebar />
      <div className="w-full lg:w-10/12">
        <Booking result={result} bookingId={bookingId} />
      </div>
    </div>
  );
};

export default index;
