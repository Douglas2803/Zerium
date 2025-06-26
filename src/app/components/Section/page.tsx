import ComoFunciona from "./ComoFunciona/ComoFunciona";
import CriaProjeto from "./CriaProjeto/CriaProjeto";
import Hero from "./Hero/page";
import { OQueFazemos } from "./OQueFazemos/OQueFazemos";
import PerguntasFrequentes from "./PerguntasFrequentes/PerguntasFrequentes";
import Portfolio from "./portfolio";
import SessaoFomrulario from "./SessaoFormulario";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const Section = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col gap-[100px] lg:gap-[140px]">
        <Hero />
        <ComoFunciona />
        <OQueFazemos />
        <CriaProjeto />
        <PerguntasFrequentes />
        <Portfolio />
        <SessaoFomrulario />
      </div>
    </main>
  );
};

export default Section;
