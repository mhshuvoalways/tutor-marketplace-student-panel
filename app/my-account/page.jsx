import Account from "@/app/components/account/student";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";

const page = () => {
  return (
    <>
      <Header />
      <main className="mt-40 mb-20">
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default page;
