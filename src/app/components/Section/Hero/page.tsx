import Button from "./Button/page"
import Title from "./Title/page"

const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-16">
      <Title />
      <Button />
    </div>
  )
}

export default Hero