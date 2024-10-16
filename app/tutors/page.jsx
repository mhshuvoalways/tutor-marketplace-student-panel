import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Filter from "@/app/components/filter";
import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";

const page = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <MotionPrimitiveComponent>
          <Filter />
        </MotionPrimitiveComponent>
      </main>
      <Footer />
    </>
  );
};

export default page;
