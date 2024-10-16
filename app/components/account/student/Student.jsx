import Button1 from "@/app/components/common/button/Button1";
import Input from "@/app/components/common/input/Input";
import UploadImage from "@/app/components/common/upload";
import StudentImage from "@/public/images/students/student3.png";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-white rounded shadow-sm w-full lg:w-10/12 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
        <div className="space-y-5">
          <div className="flex items-center justify-center gap-5 text-nowrap">
            <Image
              src={StudentImage}
              alt=""
              className="w-20 lg:size-40 rounded-full"
            />
            <div>
              <p className="text-2xl">MH Shuvo</p>
              <p className="text-gray-500">Max file size is 2 MB</p>
            </div>
          </div>
          <UploadImage />
        </div>
        <div className="space-y-5">
          <p className="text-xl">User Info</p>
          <Input placeholder="MH Shuvo" />
          <Input placeholder="Current password" />
          <Input placeholder="New password" />
          <Input placeholder="Confirm password" />
          <Button1 title={"Change"} />
        </div>
      </div>
    </div>
  );
};

export default index;
