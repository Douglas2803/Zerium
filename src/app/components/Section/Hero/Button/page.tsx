"use client";

import { useState } from "react";
import "./style.sass";
import Image from "next/image";

const Button = () => {
  const [isHover, setIsHover] = useState(false);

  const mouseInHandler = () => {
    setIsHover(true);
  };

  const mouseOuHandler = () => {
    setIsHover(false);
  };

  return (
    <a
      href="https://wa.me/5554981229448"
      onMouseEnter={mouseInHandler}
      onMouseLeave={mouseOuHandler}
      className={`
      button
      flex items-center gap-[8.78px] relative
      w-[312px] h-[64px] rounded-[80px] text-2xl text-grey_3 bg-grey_4
      sm:w-[300px]  sm:h-[65px] sm-item
      xl:h-[82px] xl:w-[420px]
      transition-colors duration-[600ms] ease-in-out
      ${isHover ? "bg-orange" : ""}
     `}
    >
      <div
        className={`
        flex justify-center items-center absolute
        rounded-full w-[51px] h-[51px] px-3
        transition-colors duration-[600ms] ease-in-out
        sm:w-[55px] sm:h-[55px]
        xl:w-[70px] xl:h-[70px] ml-1
        circle
        ${isHover ? "bg-black" : "reverse box_shadow bg-orange"}
        `}
      >
        <Image
          src="/assets/icons/arrow.svg"
          alt="Arrow Icon"
          className="w-full rotate-90"
          width={6}
          height={46}
        />
      </div>
      <button
        className={`
          pl-[65.85px] absolute
          transition-colors duration-[600ms] ease-in-out
          sm:ml-1 lg:ml-2
          xl:text-[34px] xl:pl-[80px] text-center
          ${isHover ? "text-black_1" : ""}
          `}
      >
        Pedir orçamento
      </button>
    </a>
  );
};

export default Button;
