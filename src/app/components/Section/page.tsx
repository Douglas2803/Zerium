import ComoFunciona from "./ComoFunciona/ComoFunciona";
import CriaProjeto from "./CriaProjeto/CriaProjeto";
import Hero from "./Hero/page";
import { OQueFazemos } from "./OQueFazemos/OQueFazemos";

const Section = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col gap-[100px] lg:gap-[140px]">
        <Hero />
        <ComoFunciona />
        <OQueFazemos />
        <CriaProjeto />
      </div>
    </main>
  );
};

export default Section;
