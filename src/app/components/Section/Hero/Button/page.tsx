"use client";

import { useState } from "react";
import "./style.sass";

const Button = () => {
  const [isHover, setIsHover] = useState(false);

  const mouseInHandler = () => {
    setIsHover(true);
  };
  const mouseOuHandler = () => {
    setIsHover(false);
  };

  return (
    <button
      onMouseEnter={mouseInHandler}
      onMouseLeave={mouseOuHandler}
      className={`
      button
      flex items-center gap-[8.78px] relative
      w-[312px] h-[64px] rounded-[80px] text-2xl text-grey_3 bg-grey_4
      sm:w-[320px]  sm:h-[65px] sm-item
      xl:h-[82px] xl:w-[420px]
      transition-colors duration-[600ms] ease-in-out
      ${isHover ? "bg-yellow" : ""}
     `}
    >
      <div
        className={`
        flex justify-center items-center absolute
        rounded-full w-[51px] h-[51px] px-3
        transition-colors duration-[600ms] ease-in-out left-[5.12px]
        sm:w-[55px] sm:h-[55px] sm:left-[5.5px]
        xl:w-[70px] xl:h-[70px]
        circle
        ${isHover ? "bg-black" : "reverse box_shadow bg-yellow"}
        `}
      >
        <img
          src="/assets/icons/arrow.svg"
          alt="Arrow Icon"
          className="w-full rotate-90"
        />
      </div>
      <p
        className={`
          pl-[65.85px] absolute
          transition-colors duration-[600ms] ease-in-out
          sm:ml-1
          xl:text-[34px] xl:pl-[80px]
          ${isHover ? "text-black_1" : ""}
          `}
      >
        Pedir orçamento
      </p>
    </button>
  );
};

export default Button;
