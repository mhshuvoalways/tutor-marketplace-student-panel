import Image from "next/image";

const Item = ({ title, des, image, name, jobTitle }) => {
  return (
    <div className="border shadow p-10 rounded bg-white space-y-4 w-full sm:w-[95%] mx-auto">
      <Image src={image} alt="" className="size-14 rounded-full" />
      <p className="text-xl font-semibold font-outfit">{title}</p>
      <p className="text-gray-500 italic">{des}</p>
      <div>
        <h4 className="text-lg font-semibold font-outfit">{name}</h4>
        <span className="font-outfit">{jobTitle}</span>
      </div>
    </div>
  );
};

export default Item;
