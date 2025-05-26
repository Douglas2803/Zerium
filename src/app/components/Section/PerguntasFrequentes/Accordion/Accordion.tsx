"use client";

import Image from "next/image";
import { useState } from "react";

interface IAccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full py-4">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between py-3 sm:py-2 "
      >
        <p className="text-sm sm:text-lg text-left text-grey_3">{title}</p>

        <Image
          src="/assets/icons/seta-direita.svg"
          alt="Seta"
          width={39}
          height={39}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="text-left text-sm sm:text-lg  text-grey_1 border-1 rounded-b-sm p-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
