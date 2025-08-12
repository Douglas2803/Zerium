import AnimateOnScrool from "@/app/components/AnimateOnScrool/AnimateOnScrool";
import ParalaxItem from "./Paralax-Item/Paralax-Item";

const Paralax = () => {
  return (
    <AnimateOnScrool
      className="slide-up-600-400
    flex mx-auto sm:absolute right-[0] sm:top-[250px] lg:top-[36px] lg:right-[71px] gap-6 text-white mt-[74px] linear_black_paralax"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <ParalaxItem x={0} />
        <ParalaxItem x={1} />
        <ParalaxItem x={2} />
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 pt-20">
        {/* <h1 className="text-left linear_grey_1 text-2xl lg:text-4xl"></h1> */}
        <ParalaxItem x={3} />
        <ParalaxItem x={4} />
      </div>
    </AnimateOnScrool>
  );
};

export default Paralax;
