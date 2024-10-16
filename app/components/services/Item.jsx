import Image from "next/image";

const Item = ({ title, des, image }) => {
  return (
    <div className="flex items-center gap-x-4 border rounded hover:shadow p-7 transition">
      <Image src={image} alt="" className="size-10" />
      <div>
        <p className="text-lg font-semibold font-outfit">{title}</p>
        <p className="text-gray-500">{des}</p>
      </div>
    </div>
  );
};

export default Item;
