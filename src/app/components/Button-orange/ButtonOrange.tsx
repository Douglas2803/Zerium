import Image from "next/image";
import "./style.sass";

import { SlCallIn } from "react-icons/sl";

interface IButtonOrangeProps {
    className?: string;
    text: string;
    enable?: boolean;
    icon?: string;
}


const ButtonOrange = ({className, text, enable = false, icon}:IButtonOrangeProps) => {
  return enable ? (
    <a
      className={`${className} text-white bg-orange text-lg flex items-center justify-center gap-2 h-11 rounded-full
      hover:bg-grey_3 hover:text-black_1 btn_transition 
      `}
      href="https://wa.me/5554981229448"
    >
      <SlCallIn className="w-[16px] h-[16px] rotate-90 hover:fill-black_1" />
      {text}
    </a>
  ) : null;
}

export default ButtonOrange