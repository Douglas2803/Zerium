import React from "react";
import ComponentTittle from "../ComponentTittle/ComponentTittle";
import Card from "./Card/Card";
import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";

const ComoFunciona = () => {
  return (
    <ComponentTittle
      tittle={"Como funciona?"}
      className="sm:mt-[575px] scroll-mt-2 sm:scroll-mt-8"
      id="como"
    >
      <div className="grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-3 gap-6 justify-items-center">
        <AnimateOnScrool className="slide-up-delay-1">
          <Card
            number={1}
            title="Consultoria"
            text="Nós iremos atender e esclarecer suas necessidades para um maior alinhamento do objetivo da sua empresa com o mercado."
            className="sm:col-span-4 lg:col-span-1"
          />
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-up-delay-2">
          <Card
            number={2}
            title="Orçamento gratuito"
            text="O próximo passo é o orçamento. Iremos analisar a consultoria e suas necessidades, para orçar o projeto de forma precisa e eficiente."
            className="sm:col-span-4 lg:col-span-1"
          />
        </AnimateOnScrool>

        <AnimateOnScrool className="slide-up-delay-3">
          <Card
            number={3}
            title="Fechamento de contrato"
            text="Agora com tudo pronto, iremos enviar um contrato de serviço para garantia e sua segurança do serviço prestado"
            className="sm:col-span-4 sm:col-start-3 lg:col-span-1"
          />
        </AnimateOnScrool>
      </div>
    </ComponentTittle>
  );
};

export default ComoFunciona;
