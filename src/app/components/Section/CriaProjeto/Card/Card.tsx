import { JSX } from "react";
import Button from "../Button/Button";
import Lista from "../Lista/Lista";

import React from "react";

interface IBoxProps {
  title: string;
  list: (string | JSX.Element)[];
  valueCut: string;
  numberOfTime: number;
  value: string;
  textButton: string;
  className?: string;
}

const Card = ({
  title,
  list,
  valueCut,
  numberOfTime,
  value,
  textButton,
  className,
}: IBoxProps) => {
  return (
    <div
      className={`flex flex-col justify-between flex-grow basis-0 gap-20 p-6 linear_black_card border rounded-lg border-stroke_blue min-h-[312px] sm:min-h-[592px] ${className || ""}`}
    >
      <div className="flex flex-col gap-4 items-start">
        <h3 className="text-grey_3 text-lg sm:text-[23px] font-bold text-left">
          {title}
        </h3>
        <Lista list={list} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[2px]">
          <p className="text-grey_1 line-through text-xs">de R$ {valueCut}</p>

          <p className="text-grey_3 text-sm">A partir de {numberOfTime}X de</p>

          <p className="text-[32px] text-grey_3 font-bold">R$ {value}</p>
          <p className="text-sm text-grey_2 font-bold">
            com 15% de desconto à vista
          </p>
        </div>

        <Button text={textButton} />
      </div>
    </div>
  );
};

export default Card;
