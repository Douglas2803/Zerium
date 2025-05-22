import { MdKeyboardArrowRight } from "react-icons/md";
import "./style.sass";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <button
      className="h-[42px] text-grey_3 border rounded-full btn_transition"
    >
      <a
        href="https://wa.me/5554981229448"
        className="flex justify-center items-center gap-4 font-bold text-sm sm:text-base w-full h-full"
      >
        {text}
        <MdKeyboardArrowRight className="h-7 w-7 font-bold" />
      </a>
    </button>
  );
};

export default Button;
