import { JSX } from "react";

interface IListProps {
  list: (string | JSX.Element)[];
}

const List = ({ list }: IListProps) => {
  return (
    <ul className=" flex flex-col items-start gap-2">
      {list.map((item, index) => {
        return (
          <li key={index} className="flex gap-2 text-left text-grey_1 text-sm sm:text-lg font-normal">
            <img src="/assets/icons/check.svg" alt="Icone check" />
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
