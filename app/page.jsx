import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Hero from "@/app/components/hero";
import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";
import QualifiedTutors from "@/app/components/qualifiedTutors";
import Reviews from "@/app/components/reviews";
import Services from "@/app/components/services";
import { SessionProvider } from "next-auth/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <main className="mt-20">
        <MotionPrimitiveComponent>
          <Hero />
        </MotionPrimitiveComponent>
        <MotionPrimitiveComponent>
          <Services />
        </MotionPrimitiveComponent>
        <MotionPrimitiveComponent>
          <Reviews />
        </MotionPrimitiveComponent>
        <MotionPrimitiveComponent>
          <QualifiedTutors />
        </MotionPrimitiveComponent>
      </main>
      <Footer />
    </>
  );
};

export default page;
