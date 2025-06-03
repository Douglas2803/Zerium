"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import Button from "../../Button/Button";
import useIsMobile from "@/hooks/useIsMobile";

interface ComponentsTittleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tittle: string;
  subTittle?: string;
  children: ReactNode;
  className?: string;
  isTrue?: boolean;
  id?: string;
}

const ComponentTittle = ({
  tittle,
  subTittle,
  children,
  className,
  isTrue,
  id,
}: ComponentsTittleProps) => {

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);



  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} flex flex-col gap-9`} id={id}>
      <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <Image
                alt="Quadrado"
                src={"/assets/icons/quadrado.svg"}
                width={24}
                height={24}
              />
              <h2 className="text-[23px] linear_grey_1">{tittle}</h2>
            </div>

            <button onClick={handleButton} className="sm:hidden">
              {isOpen ? (
                <Image
                  alt="icone menos"
                  src={"/assets/icons/menos.svg"}
                  width={27}
                  height={27}
                />
              ) : (
                <Image
                  alt="icone mais"
                  src={"/assets/icons/mais.svg"}
                  width={27}
                  height={27}
                />
              )}
            </button>
          </div>

          <p className="text-left text-grey_1 text-sm sm:text-lg">
            {subTittle}
          </p>
        </div>
        <Button
          text="Começar"
          enable={isTrue}
          className="inline-block text-center w-[200px]"
        />
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ComponentTittle;
