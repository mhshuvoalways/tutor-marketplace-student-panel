import Account from "@/app/components/account/student";
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
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default page;
