import Booking from "@/app/components/account/booking";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";

const page = () => {
  return (
    <>
      <Header />
      <main className="mt-40 mb-20">
        <Booking />
      </main>
      <Footer />
    </>
  );
};

export default page;
