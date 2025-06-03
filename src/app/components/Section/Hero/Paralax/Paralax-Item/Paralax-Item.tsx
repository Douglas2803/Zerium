"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const items = [
  {
    pequeno: "/assets/images/paralax-1.webp",
    grande: "/assets/images/paralax-desktop-1.webp",
  },
  {
    pequeno: "/assets/images/paralax-2.webp",
    grande: "/assets/images/paralax-desktop-2.webp",
  },
  {
    pequeno: "/assets/images/paralax-3.webp",
    grande: "/assets/images/paralax-desktop-3.webp",
  },
  {
    pequeno: "/assets/images/paralax-4.webp",
    grande: "/assets/images/paralax-desktop-4.webp",
  },
  {
    pequeno: "/assets/images/paralax-5.webp",
    grande: "/assets/images/paralax-desktop-5.webp",
  },
];

interface ParalaxProps {
  x: number;
}

function ParalaxItem({ x }: ParalaxProps) {
  const [estaAtivo, setEstaAtivo] = useState(false);

  useEffect(() => {
    function verificaTamanho() {
      setEstaAtivo(window.innerWidth >= 1024);
    }

    verificaTamanho();

    window.addEventListener("resize", verificaTamanho);

    return () => window.removeEventListener("resize", verificaTamanho);
  }, []);

  if (x < 0 || x >= items.length) {
    return <p>Índice inválido</p>;
  }

  return (
    <div>
      {estaAtivo ? (
        <Image
          alt="imagem"
          width={222.45}
          height={311}
          src={estaAtivo ? items[x].grande : items[x].pequeno}
        />
      ) : (
        <Image
          alt="imagem"
          width={152}
          height={212.96}
          src={estaAtivo ? items[x].grande : items[x].pequeno}
        />
      )}
    </div>
  );
}

export default ParalaxItem;
