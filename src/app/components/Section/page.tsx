import Hero from "./Hero/page";

const Section = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col sm:flex-row">
        <Hero />
      </div>
    </main>
  );
};

export default Section;
