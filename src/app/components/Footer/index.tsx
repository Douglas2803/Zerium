import Image from "next/image";
import { NavLista } from "./nav-lista";

const Footer = () => {
  return (
    <footer className="container flex flex-col gap-8 mt-[100px] lg:mt-[140px]">
      <div className="flex flex-col items-center">
        <Image
          alt="logo Zerium"
          src="/assets/icons/logo-zerium.svg"
          width={57}
          height={73}
        />

        {/* <ContatoLista /> */}
      </div>

      <div className="mb-11">
        <div className="border-grey_2 border-t-[1px] ">
          <div
            className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center
            gap-8 mt-8"
          >
            <NavLista />

            <p className="text-sm sm:text-lg text-grey_2 text-center">
              &copy; 2025 Zerium. Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
