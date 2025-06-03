import Button from "./Button/page"
import Paralax from "./Paralax/page";
import Title from "./Title/page"

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:items-start gap-16 xl:gap-20">
        <Title />
        <Button />
      </div>
      
      <Paralax />
    </>
  );
}

export default Hero