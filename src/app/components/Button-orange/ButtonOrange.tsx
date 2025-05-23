import Image from "next/image";
import "./style.sass";

interface IButtonOrangeProps {
    className?: string;
    text: string;
    enable?: boolean;
    icon?: string;
}


const ButtonOrange = ({className, text, enable = false, icon}:IButtonOrangeProps) => {
  return enable ? (
    <a
      className={`${className} text-white bg-orange text-lg flex items-center justify-center h-11 rounded-full
      hover:bg-grey_3 hover:text-black_1 btn_transition 
      `}
      href="https://wa.me/5554981229448"
    >
      {icon && (
        <Image
          src={icon}
          alt="Icon"
          width={20}
          height={20}
          className="mr-4"
        />
      )}
      {text}
    </a>
  ) : null;
}

export default ButtonOrange