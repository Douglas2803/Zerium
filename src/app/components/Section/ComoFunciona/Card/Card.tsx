import Image from "next/image";
import React from "react";

const urlList: string[] = [
  "assets/icons/porco.svg",
  "assets/icons/maos.svg",
  "assets/icons/pergaminho.svg"
];

interface CardProps {
  number: number;
  title: string;
  text: string;
}

const Card = ({ number, title, text }: CardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-end h-[468px] xl:h-[520px] gap-[62px] lg:gap-[77px]
      border rounded-lg border-stroke_blue px-[18px] p-12 linear_black_card
      flex-grow basis-0 min-w-[300px] sm:max-w-[328px] lg:max-w-full"
    >
      <div className="flex flex-col gap-4 items-center">
        <Image
          alt={`icone ${number}`}
          src={urlList[number - 1]}
          width={40}
          height={36}
        />

        <h3 className="text-grey_3 text-lg sm:text-[23px] lg:text-[28px] font-bold">
          {title}
        </h3>
        
        <p className="text-grey_1 sm:text-sm lg:text-lg">{text}</p>
      </div>

      <p className="text-[64px] linear_grey_1 font-poppins italic font-bold w-fit">
        {number}
      </p>
    </div>
  );
};

export default Card;
