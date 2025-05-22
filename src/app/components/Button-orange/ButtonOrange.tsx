import "./style.sass";

interface IButtonOrangeProps {
    className?: string;
    text: string;
    disabled?: boolean;
}


const ButtonOrange = ({className, text, disabled = false}:IButtonOrangeProps) => {
  return disabled ? (
    <a
      className={`${className} text-white bg-orange text-lg flex items-center justify-center w-[200px] h-11 rounded-full
      hover:bg-grey_3 hover:text-black_1 btn_transition 
      `}
      href="https://wa.me/5554981229448"
    >
      {text}
    </a>
  ) : null;
}

export default ButtonOrange