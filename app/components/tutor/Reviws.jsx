import Rating from "@/app/components/common/rating";
import StudentImage from "@/public/images/students/student3.png";
import Image from "next/image";

const Reviws = () => {
  return (
    <div className="bg-white shadow rounded p-5 mt-10 font-outfit">
      <p className="text-2xl">{`Reviews`} (06)</p>
      <div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 border-b py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 py-5">
          <Image src={StudentImage} alt="" className="rounded size-16" />
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg">Beau Simard</p>
              <p className="text-gray-500">3 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">5.0</p>
              <Rating size={24} value={5} />
            </div>
            <p className="mt-3 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviws;
