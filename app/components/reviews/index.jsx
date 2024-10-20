import Slide from "@/app/components/reviews/Slide";
import PatternImage from "@/public/images/pattern.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="relative">
      <Image src={PatternImage} alt="" className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-5 py-20">
        <p className="text-4xl font-medium font-outfit">
          See how our Students <br /> made their{" "}
          <strong className="text-secondary">#Success Stories</strong>
        </p>
        <div className="mt-10">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default index;
