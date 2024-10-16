const Button2 = ({ title, className, onClick }) => {
  return (
    <button
      className={`w-full btn shadow-none bg-slate-100 py-2 px-5 text-base mt-5 text-gray-500 font-semibold hover:bg-primary hover:text-white ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button2;
