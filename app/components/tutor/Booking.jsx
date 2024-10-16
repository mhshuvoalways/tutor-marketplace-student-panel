import Button1 from "@/app/components/common/button/Button1";
import Calendly from "@/app/components/common/calender";
import Time from "@/app/components/common/calender/Time";

const Booking = () => {
  return (
    <div className="shadow bg-white rounded p-5 space-y-5 font-outfit booking">
      <Calendly />
      <Time />
      <Button1 title={"Book"} className={"!bg-green-500 hover:!bg-green-600"} />
    </div>
  );
};

export default Booking;
