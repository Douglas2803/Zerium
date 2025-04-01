"use client"

import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface ComponentsTittleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tittle: string;
  children: ReactNode
}

const ComponentTittle = ({ tittle, children }: ComponentsTittleProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between linear_grey_1">
        <div className="flex items-center gap-2">
          <Image
            alt="Quadrado"
            src={"/assets/icons/quadrado.svg"}
            width={24}
            height={24}
          />

          <h2 className="text-[23px]">{tittle}</h2>
        </div>

        <button onClick={handleButton}>
          {isOpen ? (
            <Image
              alt="Quadrado"
              src={"/assets/icons/mais.svg"}
              width={27}
              height={27}
            />
          ) : (
            <Image
              alt="Quadrado"
              src={"/assets/icons/menos.svg"}
              width={27}
              height={27}
            />
          )}
        </button>
      </div>
      
      {isOpen ? <div>{children}</div> : ""}
    </div>
  );
};

export default ComponentTittle;
