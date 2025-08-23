import NavLink from "../../Nav-link/Nav-link";
import Image from "next/image";
import "@/app/styles/animacoes.sass";
import AnimateOnScrool from "../../AnimateOnScrool/AnimateOnScrool";

const Logo = () => {
  return (
    <NavLink className="block" href="/">
      {/* Telas pequenas */}
      <div className="flex sm:hidden">
        <AnimateOnScrool className="slide-bottom flex align-center">
          <Image
            src="/assets/icons/logo-zerium.svg"
            height={38}
            width={40}
            objectFit="cover"
            layout="intrinsic"
            alt="Icone logo"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-left">
          <Image
            src="/assets/icons/logo-nome-zerium.svg"
            height={60}
            width={150}
            objectFit="cover"
            alt="Icone logo"
          />
        </AnimateOnScrool>
      </div>

      {/* Telas médias */}
      <div className="hidden sm:flex md:hidden">
        <AnimateOnScrool className="slide-bottom">
          <Image
            className="hidden sm:block md:hidden"
            src="/assets/icons/logo-zerium.svg"
            height={60}
            width={55}
            objectFit="cover"
            alt="Icone logo"
          />{" "}
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-left">
          <Image
            className="hidden sm:block md:hidden"
            src="/assets/icons/logo-nome-zerium.svg"
            height={73}
            width={168}
            objectFit="cover"
            alt="Icone logo"
          />
        </AnimateOnScrool>
      </div>

      {/* Telas grandes*/}
      <div className="hidden md:flex">
        <AnimateOnScrool className="slide-bottom">
          <Image
            src="/assets/icons/logo-zerium.svg"
            height={60}
            width={65}
            objectFit="cover"
            alt="Icone logo"
          />
        </AnimateOnScrool>
        <AnimateOnScrool className="slide-left">
          <Image
            src="/assets/icons/logo-nome-zerium.svg"
            height={80}
            width={200}
            objectFit="cover"
            alt="Icone logo"
          />
        </AnimateOnScrool>
      </div>
    </NavLink>
  );
};

export default Logo;
