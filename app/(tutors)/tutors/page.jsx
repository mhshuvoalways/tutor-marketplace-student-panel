import Filter from "@/app/components/filter";
import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";

const page = ({ searchParams }) => {
  return (
    <div className="mt-20">
      <MotionPrimitiveComponent>
        <Filter searchValue={searchParams} tutorPage />
      </MotionPrimitiveComponent>
    </div>
  );
};

export default page;
