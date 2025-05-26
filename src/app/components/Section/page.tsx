import ComoFunciona from "./ComoFunciona/ComoFunciona";
import CriaProjeto from "./CriaProjeto/CriaProjeto";
import Hero from "./Hero/page";
import { OQueFazemos } from "./OQueFazemos/OQueFazemos";
import PerguntasFrequentes from "./PerguntasFrequentes/PerguntasFrequentes";

const Section = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col gap-[100px] lg:gap-[140px]">
        <Hero />
        <ComoFunciona />
        <OQueFazemos />
        <CriaProjeto />
        <PerguntasFrequentes />
      </div>
    </main>
  );
};

export default Section;
