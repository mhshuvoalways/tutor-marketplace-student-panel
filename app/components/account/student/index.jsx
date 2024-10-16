import Sidebar from "@/app/components/account/sidebar";
import Student from "@/app/components/account/student/Student";

const index = () => {
  return (
    <div className="container mx-auto font-outfit flex flex-wrap lg:flex-nowrap gap-10 px-5">
      <Sidebar />
      <Student />
    </div>
  );
};

export default index;
