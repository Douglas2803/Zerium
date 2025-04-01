import React from "react";
import ComponentTittle from "../ComponentTittle/ComponentTittle";
import Card from "./Card/Card";

const ComoFunciona = () => {
  return (
    <ComponentTittle tittle={"Como funciona?"}>
      <Card
        number={1}
        title="Consultoria"
        text="Nós iremos atender e esclarecer suas necessidades para um maior alinhamento do objetivo da sua empresa com o mercado."
      />
    </ComponentTittle>
  );
};

export default ComoFunciona;
