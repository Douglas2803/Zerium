import ComoFunciona from "./Como-Funciona/page";
import Hero from "./Hero/page";

const Section = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col sm:flex-row">
        <Hero />
        <ComoFunciona />
      </div>
    </main>
  );
};

export default Section;
