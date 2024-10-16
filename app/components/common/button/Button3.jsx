import Link from "next/link";

const Button3 = () => {
  return (
    <Link href={process.env.TUTOR_PANEL}>
      <button className="btn bg-primary/90 hover:bg-primary text-white flex items-center gap-x-2 w-full text-center sm:w-auto">
        Join as a Tutor
        <small className="text-secondary font-gochiHand">{`It's free!`}</small>
      </button>
    </Link>
  );
};

export default Button3;
