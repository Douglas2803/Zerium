import "./style.sass";

import { SlCallIn } from "react-icons/sl";

interface IButtonProps {
  className?: string;
  text: string;
  enable?: boolean;
  icon?: boolean;
}

const Button = ({
  className,
  text,
  enable = false,
  icon = false,
}: IButtonProps) => {
  return enable ? (
    <a
      className={`${className} text-white bg-orange text-lg flex items-center justify-center gap-2 h-11 rounded-full
      hover:bg-grey_3 hover:text-black_1 btn_transition 
      `}
      href="https://wa.me/5554981229448"
    >
      {icon ? (
        <SlCallIn className="w-[16px] h-[16px] rotate-90 hover:fill-black_1" />
      ) : null}
      {text}
    </a>
  ) : null;
};

export default Button;
