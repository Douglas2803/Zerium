import React from "react";
import ComponentTittle from "../ComponentTittle/ComponentTittle";
import Card from "./Card/Card";

const ComoFunciona = () => {
  return (
    <ComponentTittle
      tittle={"Como funciona?"}
      className="sm:mt-[575px]"
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center">
        <Card
          number={1}
          title="Consultoria"
          text="Nós iremos atender e esclarecer suas necessidades para um maior alinhamento do objetivo da sua empresa com o mercado."
        />

        <Card
          number={2}
          title="Orçamento gratuito"
          text="O próximo passo é o orçamento. Iremos
          anlisar a consuloria e suas necessidades, para orçar o projeto de forma precisa e eficiente."
        />

        <Card
          number={3}
          title="Fechamento de contrato"
          text="Agora com tudo pronto, iremos enviar um contrato de serviço para garantia e sua segurança do serviço prestado"
        />
      </div>
    </ComponentTittle>
  );
};

export default ComoFunciona;
