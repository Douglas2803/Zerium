import Carousel from "./carousel";

const Portfolio = () => {
  return (
    <section id="cases" className="md:container block">
      <h2 className="text-2xl sm:text-[28px] lg:text-4xl linear_grey_1">
        Alguns de nossos cases de sucesso
      </h2>

      <Carousel />
    </section>
  );
};

export default Portfolio;
