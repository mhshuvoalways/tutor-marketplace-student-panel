import LogoImage from "@/public/images/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <footer>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10">
          <div>
            <Image src={LogoImage} alt="" className="w-60" />
            <p className="mt-5 text-gray-200">
              We accuse and bring to judgment those who are worthy of judgment,
              softened and corrupted by the flattery of present pleasures, whose
              pains and troubles they are about to experience, darkened by greed
              that does not provide mikume.
            </p>
            <Link href={process.env.TUTOR_PANEL} target="blank">
              <button className="btn py-1.5 px-3 bg-white hover:bg-gray-100 text-black flex items-center gap-x-2 mt-10">
                Join as a Tutor
                <small className="text-secondary font-gochiHand">{`It's free!`}</small>
              </button>
            </Link>
          </div>
          <div>
            <p className="text-2xl font-medium font-outfit">Socials</p>
            <div className="flex items-center gap-x-5 mt-5">
              <div className="border rounded-full p-2 size-10 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all cursor-pointer">
                <Facebook />
              </div>
              <div className="border rounded-full p-2 size-10 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all cursor-pointer">
                <Linkedin />
              </div>
              <div className="border rounded-full p-2 size-10 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all cursor-pointer">
                <Instagram />
              </div>
              <div className="border rounded-full p-2 size-10 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all cursor-pointer">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#451e52] py-2">
        <p className="container mx-auto px-5 text-sm font-gochiHand text-white text-center">
          All right reserved by{" "}
          <Link
            href="https://www.mhshuvo.com"
            target="blank"
            className="hover:underline"
          >
            MH Shuvo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default index;
