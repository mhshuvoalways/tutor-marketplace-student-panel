import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";
import Tutor from "@/app/components/tutor";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <main className="mt-20">
        <MotionPrimitiveComponent>
          <Tutor />
        </MotionPrimitiveComponent>
      </main>
      <Footer />
    </>
  );
};

export default page;
