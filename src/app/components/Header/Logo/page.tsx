import React from "react";
import NavLink from "../../Nav-link/Nav-link";
import Image from "next/image";

const Logo = () => {
  return (
    <NavLink className="block" href="/">
      {/* Telas pequenas */}
      <div className="flex sm:hidden">
        <Image
          src="/assets/icons/logo-zerium.svg"
          height={38}
          width={40}
          objectFit="cover"
          layout="intrinsic"
          alt="Icone logo"
        />

        <Image
          src="/assets/icons/logo-nome-zerium.svg"
          height={60}
          width={150}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>

      {/* Telas médias */}
      <div className="hidden sm:flex md:hidden">
        <Image
          className="hidden sm:block md:hidden"
          src="/assets/icons/logo-zerium.svg"
          height={60}
          width={55}
          objectFit="cover"
          alt="Icone logo"
        />{" "}
        <Image
          src="/assets/icons/logo-nome-zerium.svg"
          height={73}
          width={168}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>

      {/* Telas grandes*/}
      <div className="hidden md:flex">
        <Image
          src="/assets/icons/logo-zerium.svg"
          height={60}
          width={65}
          objectFit="cover"
          alt="Icone logo"
        />

        <Image
          src="/assets/icons/logo-nome-zerium.svg"
          height={80}
          width={200}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>
    </NavLink>
  );
};

export default Logo;
