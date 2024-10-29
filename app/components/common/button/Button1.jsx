import LoadingIcon from "@/public/icons/loading.svg";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Button1 = ({ title, className, onClick, icon, isClicked }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-x-2 btn py-2 px-5 text-base bg-primary/90 hover:bg-primary text-white w-full font-semibold rounded ${className}`}
        onClick={onClick}
        disabled={isClicked}
      >
        {title}
        {isClicked ? (
          <Image src={LoadingIcon} alt="loading icon" />
        ) : (
          icon && <MoveRight />
        )}
      </button>
      {isClicked && <p className="inset-0 fixed z-50"></p>}
    </>
  );
};

export default Button1;
