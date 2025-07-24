import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";
import "./style.sass";
import "@/app/styles/animacoes.sass";

interface IPropsHamburguer
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isAnimate: boolean;
}

const Hamburguer = ({ isAnimate, ...props }: IPropsHamburguer) => {
  return (
    <AnimateOnScrool className="slide-show-smooth">
      <button
        className={`md:hidden ${isAnimate ? "activate" : ""}`}
        id="hamburguer"
        aria-label="Botão hamburguer"
        {...props}
      >
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
        <span id="menu-label" className="sr-only">
          Botão menu
        </span>
      </button>
    </AnimateOnScrool>
  );
};

export default Hamburguer;
