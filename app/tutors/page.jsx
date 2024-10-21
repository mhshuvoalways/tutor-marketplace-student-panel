import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Filter from "@/app/components/filter";
import MotionPrimitiveComponent from "@/app/components/motionPrimitivesComponent/InView";
import { SessionProvider } from "next-auth/react";

const page = ({ searchParams }) => {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <main className="mt-20">
        <MotionPrimitiveComponent>
          <Filter searchValue={searchParams} />
        </MotionPrimitiveComponent>
      </main>
      <Footer />
    </>
  );
};

export default page;
