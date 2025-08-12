import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";
import Form from "./Formulario";

const SessaoFomrulario = () => {
  return (
    <AnimateOnScrool
      className="slide-show-smooth
      flex flex-col items-center gap-9 sm:gap-11 sm:p-11 sm:shadow-lg sm:shadow-grey_1/2
      sm:bg-[url('/assets/images/background-formulario-tablet.png')] lg:bg-[url('/assets/images/background-formulario-desktop.png')] 
      bg-no-repeat bg-cover bg-center"
    >
      <div className="flex flex-col gap-3 sm:gap-5">
        <h2 className="linear_grey_1 text-2xl sm:text-[28px] lg:text-[36px] py-2">
          Pronto para turbinar seu negôcio ?
        </h2>

        <p className="text-grey_1 text-sm sm:text-lg">
          Preencha o formulário abaixo e um consultor entrará em contato para
          agendar o melhor dia e horário para conversarmos.
        </p>
      </div>

      <Form />
    </AnimateOnScrool>
  );
};

export default SessaoFomrulario;
