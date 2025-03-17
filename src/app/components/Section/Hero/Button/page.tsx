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
      w-full h-[64px] rounded-[32px] text-2xl text-grey_3 bg-grey_4
      transition-colors duration-[600ms] ease-in-out
      ${isHover ? "bg-yellow" : ""}
     `}
    >
      <a href="https://wa.me/5554981229448"></a>
      
      <div
        className={`
        flex justify-center items-center absolute
        bg-yellow rounded-full w-[51px] h-[51px] px-3
        transition-colors duration-[600ms] ease-in-out left-[5.12px]
        circle
        ${isHover ? "bg-black_1" : "reverse box_shadow"}
        `}
      >
        <img
          src="/assets/icons/arrow.svg"
          alt="Arrow Icon"
          className="w-30 h-30 rotate-90"
        />
      </div>
      <p
        className={`
          pl-[65.85px] absolute
          transition-colors duration-[600ms] ease-in-out
          ${isHover ? "text-black_1" : ""}
          `}
      >
        Pedir orçamento
      </p>
    </button>
  );
};

export default Button;
