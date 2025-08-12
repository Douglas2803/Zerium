import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";
import Carousel from "./carousel";

const Portfolio = () => {
  return (
    <section id="cases" className="md:container block">
      <AnimateOnScrool className="slide-up-450-200">
        <h2 className="text-2xl sm:text-[28px] lg:text-4xl linear_grey_1">
          Alguns de nossos cases de sucesso
        </h2>
      </AnimateOnScrool>
      <AnimateOnScrool className="slide-show-smooth">
        <Carousel />
      </AnimateOnScrool>
    </section>
  );
};

export default Portfolio;
