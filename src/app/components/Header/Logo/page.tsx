import React from "react";
import NavLink from "../../Nav-link/Nav-link";
import Image from "next/image";

const Logo = () => {
  return (
    <NavLink className="block" href="/">
      {/* Telas pequenas */}
      <div className="flex sm:hidden gap-1">
        <Image
          src="/assets/images/logo-icone-sm.webp"
          height={38}
          width={46}
          objectFit="cover"
          layout="intrinsic"
          alt="Icone logo"
        />
        <Image
          src="/assets/images/logo-nome-sm.webp"
          height={58}
          width={116}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>

      {/* Telas médias */}
      <div className="hidden sm:flex md:hidden gap-[6px]">
        <Image
          className="hidden sm:block md:hidden"
          src="/assets/images/logo-icone-md.webp"
          height={55}
          width={68}
          objectFit="cover"
          alt="Icone logo"
        />{" "}
        <Image
          src="/assets/images/logo-nome-md.webp"
          height={73}
          width={168}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>

      {/* Telas grandes*/}
      <div className="hidden md:flex gap-2">
        <Image
          src="/assets/images/logo-icone-lg.webp"
          height={77}
          width={95}
          objectFit="cover"
          alt="Icone logo"
        />
        <Image
          src="/assets/images/logo-nome-md.webp"
          height={74}
          width={169}
          objectFit="cover"
          alt="Icone logo"
        />
      </div>
    </NavLink>
  );
};

export default Logo;
