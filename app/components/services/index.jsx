import Button from "@/app/components/common/button/Button3";
import Items from "@/app/components/services/Item";
import ZigzaglineImage from "@/public/icons/zigzagline.svg";
import ServiceImage1 from "@/public/images/services/service1.png";
import ServiceImage2 from "@/public/images/services/service2.png";
import ServiceImage3 from "@/public/images/services/service3.png";
import ServiceImage4 from "@/public/images/services/service4.png";
import ServiceImage5 from "@/public/images/services/service5.png";
import ServiceImage6 from "@/public/images/services/service6.png";
import Image from "next/image";

const items = [
  {
    itemImage: ServiceImage1,
    title: "Offering all types of courses",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
  {
    itemImage: ServiceImage2,
    title: "Online consultation for all",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
  {
    itemImage: ServiceImage3,
    title: "A great investment for future",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
  {
    itemImage: ServiceImage4,
    title: "Best results guranteed",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
  {
    itemImage: ServiceImage5,
    title: "Easy to connect with anyone",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
  {
    itemImage: ServiceImage6,
    title: "All verified tutors for you",
    des: "Aeccusamus et iustome odio digniste simos ducimus blanditiis",
  },
];

const index = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <Image src={ZigzaglineImage} alt="" className="mx-auto" />
        <div className="text-center w-7/12 mx-auto mt-4">
          <p className="text-2xl font-outfit">
            Better Learning. Better Results
          </p>
          <p className="text-4xl font-medium mt-2 font-outfit">
            Online education platform for all
          </p>
          <p className="mt-4 text-gray-500">
            We accuse and bring to judgment those who are worthy of judgment,
            softened and corrupted by the flattery of present pleasures, whose
            pains and troubles they are about to experience, darkened by greed
            that does not provide mikume.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Items
              title={item.title}
              des={item.des}
              image={item.itemImage}
              key={index}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default index;
