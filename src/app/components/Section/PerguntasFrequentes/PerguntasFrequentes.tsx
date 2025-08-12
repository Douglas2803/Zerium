import { IoIosArrowRoundDown } from "react-icons/io";
import Lista from "./Lista/Lista";
import Button from "../../Button/Button";
import "./style.sass";
import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";

const PerguntasFrequentes = () => {
  return (
    <div
      id="perguntas"
      className="flex flex-col gap-11 scroll-mt-2 sm:scroll-mt-8"
    >
      <div className=" flex flex-col items-center gap-5">
        <AnimateOnScrool className="slide-show-smooth">
          <div className="w-[152px] sm:w-[178px] h-1 rounded-sm bg-blue_1 drop_shadow_perguntas_frequentes"></div>
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-up-450-200">
          <h2 className="text-2xl sm:text-[28px] lg:text-4xl linear_grey_1">
            Perguntas frequentes
          </h2>
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-up-600-400">
          <p className="text-sm sm:text-lg text-grey_2">
            Em caso de quaisquer dúvidas adicionais entre em contato com nossa
            central de atendimento
          </p>
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-show-smooth">
          <IoIosArrowRoundDown className="w-11 h-11 text-grey_3 animate-bounce" />
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-show-smooth w-full flex justify-center">
          <Button
            icon={true}
            text="(54) 981229448"
            enable={true}
            className="max-w-[378px] w-full"
          />
        </AnimateOnScrool>
      </div>

      <Lista />
    </div>
  );
};

export default PerguntasFrequentes;
