import Booking from "@/app/components/account/booking";

const page = ({ searchParams }) => {
  return (
    <div className="mt-40 mb-20">
      <Booking bookingId={searchParams.bookingId} />
    </div>
  );
};

export default page;
