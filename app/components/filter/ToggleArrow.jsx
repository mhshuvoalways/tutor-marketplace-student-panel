import { ChevronLeft } from "lucide-react";

const ToggleArrow = ({ isOpen, setIsOpen, className }) => {
  return (
    <div
      className={`w-16 h-10 mt-5 bg-primary text-white rounded-l-lg flex items-center justify-center lg:hidden ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ChevronLeft />
    </div>
  );
};

export default ToggleArrow;
