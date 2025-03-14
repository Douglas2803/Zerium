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
      className={`${isHover ? "bg-indigo-500" : "bg-grey_4"}
      flex items-center gap-[8.78px] pl-[5.12px]
      w-full h-[64px] rounded-[32px] text-2xl text-grey_3
      `}
    >
      <div
        className="
      flex justify-center items-center
      bg-yellow rounded-full w-[51px] h-[51px]
      custom_box_shadow
      "
      >
        <img
          src="/assets/icons/arrow.svg"
          alt="Arrow Icon"
          className="w-30 h-30 rotate-90"
        />
      </div>
      <p>Pedir orçamento</p>
    </button>
  );
};

export default Button;
