import Booking from "@/app/components/account/booking";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <main className="mt-40 mb-20">
        <Booking />
      </main>
      <Footer />
    </>
  );
};

export default page;
