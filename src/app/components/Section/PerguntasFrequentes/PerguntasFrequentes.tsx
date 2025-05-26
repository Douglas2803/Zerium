import { IoIosArrowRoundDown } from "react-icons/io";
import Lista from "./Lista/Lista";
import ButtonOrange from "../../Button/Button";
import "./style.sass";

const PerguntasFrequentes = () => {
  return (
    <div id="perguntas" className="flex flex-col gap-11">
      <div className=" flex flex-col items-center gap-5">
        <div className="w-[152px] sm:w-[178px] h-1 rounded-sm bg-blue_1 drop_shadow_perguntas_frequentes"></div>

        <h2 className="text-2xl sm:text-[28px] lg:text-4xl linear_grey_1">
          Perguntas frequentes
        </h2>

        <p className="text-sm sm:text-lg text-grey_2">
          Em caso de quaisquer dúvidas adicionais entre em contato com nossa
          central de atendimento
        </p>

        <IoIosArrowRoundDown className="w-11 h-11 text-grey_3 animate-bounce" />

        <ButtonOrange
          icon="assets/icons/telefone.svg"
          text="(54) 981229448"
          enable={true}
          className="w-full max-w-[378px]"
        />
      </div>

      <Lista />
    </div>
  );
};

export default PerguntasFrequentes;
