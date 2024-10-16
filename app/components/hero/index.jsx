import { TextEffect } from "@/app/components/common/motion-primitives/core/text-effect";
import Search from "@/app/components/common/search";
import HeroImage from "@/public/images/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container px-5 mx-auto flex flex-wrap lg:flex-nowrap items-center gap-x-5 gap-y-10 justify-center lg:justify-between py-20">
      <div className="w-full lg:w-6/12 space-y-7">
        <div className="font-outfit text-4xl sm:text-6xl font-semibold leading-snug sm:leading-snug">
          A good <strong className="text-secondary">#education</strong> is
          always a base of
        </div>
        <TextEffect
          per="char"
          preset="fade"
          className="font-outfit text-4xl sm:text-6xl font-semibold bg-primary text-white rounded p-3 inline-block"
        >
          A brigth future
        </TextEffect>
        <p className="text-lg text-gray-500">
          Intelligence plus character—that is the goal of true education. The
          function of education is to teach one to think intensively and to
          think critically. But education which stops with efficiency may prove
          the greatest menace to society. — Martin Luther King Jr.
        </p>
        <Search />
      </div>
      <Image src={HeroImage} alt="" className="w-9/12 lg:w-5/12" />
    </div>
  );
};

export default Hero;
