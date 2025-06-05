interface ICardProps {
  title: string;
  text: string;
  iconURL: string;
  iconAlt: string;
}

const Card = ({ title, text, iconURL, iconAlt }: ICardProps) => {
  return (
    <div
      className="flex flex-col items-left justify-start p-[18px] gap-4
      border rounded-lg border-stroke_blue linear_black_card
      flex-grow basis-0 min-w-[300px] sm:max-w-[324px] lg:max-w-[389.33px]"
    >
      <div className="flex items-center gap-4">
        <img
          width={61}
          height={61}
          src={iconURL}
          alt={iconAlt}
          className=""
          loading="lazy"
        />

        <h3 className="text-grey_3 font-bold text-lg">{title}</h3>
      </div>

      <div>
        <p className="text-primary text-left text-sm md:text-lg text-grey_1">
          {text}
        </p>
      </div>
    </div>
  );
};

export { Card };
