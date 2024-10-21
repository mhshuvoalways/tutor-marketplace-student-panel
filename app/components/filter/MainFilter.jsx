"use client";

import Filter from "@/app/components/filter/Filter";
import ToggleArrow from "@/app/components/filter/ToggleArrow";
import { useState } from "react";

const MainFilter = ({ searchValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToggleArrow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="fixed right-0 top-0"
      />
      <div
        className={`w-full sm:w-96 lg:w-3/12 lg:static fixed top-0 right-0 flex lg:block transform transition-all duration-700 pl-5 lg:pl-0 ${
          isOpen
            ? "translate-x-0 z-30"
            : "lg:translate-x-0 translate-x-full z-0"
        }`}
      >
        <ToggleArrow isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="shadow bg-white rounded p-5 space-y-6 font-outfit">
          <Filter searchValue={searchValue} />
        </div>
      </div>
    </>
  );
};

export default MainFilter;
