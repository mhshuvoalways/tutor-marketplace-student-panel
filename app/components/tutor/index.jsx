import Booking from "@/app/components/tutor/Booking";
import OverView from "@/app/components/tutor/OverView";
import Reviws from "@/app/components/tutor/Reviws";
import TutorDetails from "@/app/components/tutor/TutorDetails";

const Index = () => {
  return (
    <div className="container mx-auto px-5 py-20 flex flex-wrap lg:flex-nowrap gap-5">
      <div className="w-full lg:w-8/12 space-y-5">
        <OverView />
        <TutorDetails />
        <Reviws />
      </div>
      <div className="w-full lg:w-4/12">
        <Booking />
      </div>
    </div>
  );
};

export default Index;
