import ReviewTh from "@/app/components/account/booking/ReviewTh";
import StudentImage from "@/public/images/tutor.jpg";
import Image from "next/image";

const Booking = () => {
  return (
    <div className="bg-white rounded shadow-sm p-5 overflow-x-auto">
      <table class="w-full text-nowrap">
        <thead>
          <tr>
            <th className="text-left border-b pb-5 px-5">Tutor Image</th>
            <th className="text-left border-b pb-5 px-5">Tutor Name</th>
            <th className="text-left border-b pb-5 px-5">Date</th>
            <th className="text-left border-b pb-5 px-5">Season</th>
            <th className="text-left border-b pb-5 px-5">Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left border-b py-5 px-5">
              <Image src={StudentImage} alt="" className="rounded size-16" />
            </td>
            <td className="text-left border-b py-5 px-5">Malcolm Lockyer</td>
            <td className="text-left border-b py-5 px-5">10-10-2024</td>
            <td className="text-left border-b py-5 px-5">2 hr</td>
            <td className="text-left border-b py-5 px-5">
              <ReviewTh />
            </td>
          </tr>
          <tr>
            <td className="text-left border-b py-5 px-5">
              <Image src={StudentImage} alt="" className="rounded size-16" />
            </td>
            <td className="text-left border-b py-5 px-5">Malcolm Lockyer</td>
            <td className="text-left border-b py-5 px-5">10-10-2024</td>
            <td className="text-left border-b py-5 px-5">2 hr</td>
            <td className="text-left border-b py-5 px-5">
              <ReviewTh />
            </td>
          </tr>
          <tr>
            <td className="text-left border-b py-5 px-5">
              <Image src={StudentImage} alt="" className="rounded size-16" />
            </td>
            <td className="text-left border-b py-5 px-5">Malcolm Lockyer</td>
            <td className="text-left border-b py-5 px-5">10-10-2024</td>
            <td className="text-left border-b py-5 px-5">2 hr</td>
            <td className="text-left border-b py-5 px-5">
              <ReviewTh />
            </td>
          </tr>
          <tr>
            <td className="text-left border-b py-5 px-5">
              <Image src={StudentImage} alt="" className="rounded size-16" />
            </td>
            <td className="text-left border-b py-5 px-5">Malcolm Lockyer</td>
            <td className="text-left border-b py-5 px-5">10-10-2024</td>
            <td className="text-left border-b py-5 px-5">2 hr</td>
            <td className="text-left border-b py-5 px-5">
              <ReviewTh />
            </td>
          </tr>
          <tr>
            <td className="text-left pt-5 px-5">
              <Image src={StudentImage} alt="" className="rounded size-16" />
            </td>
            <td className="text-left pt-5 px-5">Malcolm Lockyer</td>
            <td className="text-left pt-5 px-5">10-10-2024</td>
            <td className="text-left pt-5 px-5">2 hr</td>
            <td className="text-left pt-5 px-5">
              <ReviewTh />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
