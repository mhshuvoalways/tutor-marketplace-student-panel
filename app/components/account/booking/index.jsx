import Booking from "@/app/components/account/booking/Booking";
import Sidebar from "@/app/components/account/sidebar";

const index = () => {
  return (
    <div className="container mx-auto font-outfit flex flex-wrap lg:flex-nowrap gap-10 px-5">
      <Sidebar />
      <div className="space-y-5 w-full lg:w-10/12">
        <div className="bg-white p-5 shadow-sm w-full sm:w-56 rounded ml-auto text-center">
          <p>Total Spent</p>
          <p className="text-2xl mt-2">$290</p>
        </div>
        <Booking />
      </div>
    </div>
  );
};

export default index;
