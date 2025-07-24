import React from "react";
import ComponentTittle from "../ComponentTittle/ComponentTittle";
import Card from "./Card/Card";
import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";

const CriaProjeto = () => {
  return (
    <ComponentTittle
      tittle="Criar seu projeto"
      subTittle="Escolha sua necessidade"
      className="flex flex-col gap-20 sm:scroll-mt-8"
      isTrue={true}
    >
      <div className="grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-12 gap-6">
        <AnimateOnScrool className="slide-up-delay-1 sm:col-span-4 lg:col-span-4">
          <Card
            title="Site Profissional"
            list={[
              "Site responsivo",
              "SEO",
              "Suporte WhatsApp",
              "Suporte WhatsApp, E-mail e Telefone",
              "Certificado SSL de segurança",
            ]}
            valueCut="1.499,00"
            numberOfTime={3}
            value="489,99"
            textButton="Garantir preço baixo"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-up-delay-2 sm:col-span-4 lg:col-span-4">
          <Card
            title="Site Profissional Personalizado"
            list={[
              "Site responsivo",
              "SEO",
              "Layout exclusivo",
              "Suporte WhatsApp, E-mail e Telefone ilimitado",
              "Certificado SSL de segurança",
            ]}
            valueCut="2.499,00"
            numberOfTime={3}
            value="699,99"
            textButton="Falar com um especialista"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-up-delay-3 sm:col-span-4 lg:col-span-4">
          <Card
            title="E-commerce Profissional Personalizado"
            list={[
              "e-commerce personalizado",
              "SEO",
              "Site responsivo",
              "Layout exclusivo",
              "Suporte WhatsApp, E-mail e Telefone ilimitado",
              "Certificado SSL de segurança",
            ]}
            valueCut="3,199,00"
            numberOfTime={3}
            value="999,00"
            textButton="Falar com um especialista"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-up-delay-1 sm:col-span-4 lg:col-span-4 lg:col-start-3">
          <Card
            title="E-commerce Profissional NuvemShop"
            list={[
              "Site responsivo",
              "Suporte WhatsApp, E-mail e Telefone ilimitado",
              "Certificado SSL de segurança",
            ]}
            valueCut="1.700,00"
            numberOfTime={3}
            value="550,00"
            textButton="Falar com um especialista"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-up-delay-2 sm:col-span-4 sm:col-start-3 lg:col-span-4">
          <Card
            title="Aplicativo Profissional Personalizado"
            list={[
              "Aplicativo personalizado",
              "Layout exclusivo",
              "Suporte WhatsApp, E-mail e Telefone ilimitado",
            ]}
            valueCut="4.999,00"
            numberOfTime={3}
            value="1.499,00"
            textButton="Falar com um especialista"
          />
        </AnimateOnScrool>
      </div>
    </ComponentTittle>
  );
};

export default CriaProjeto;
