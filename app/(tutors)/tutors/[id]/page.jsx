import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";
import Tutor from "@/app/components/tutor";

const page = ({ params }) => {
  return (
    <div className="mt-20">
      <MotionPrimitiveComponent>
        <Tutor tutorId={params.id} />
      </MotionPrimitiveComponent>
    </div>
  );
};

export default page;
