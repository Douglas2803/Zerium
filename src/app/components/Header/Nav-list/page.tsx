import NavLink from "../../Nav-link/page";

const navList = [
  {
    text: "Como funciona ?",
    link: "#como",
  },
  {
    text: "O que fazemos",
    link: "#que",
  },
  {
    text: "Perguntas frequentes",
    link: "#perguntas",
  },
  {
    text: "Cases",
    link: "#cases",
  },
];

interface INavListProps {
  className?: string;
}

const NavList = ({ className }: INavListProps) => {
  return (
    <ul className={`${className}`}>
      {navList.map(({ text, link }) => {
        return (
          <li key={text} className="text-sm sm:text-lg py-2">
            <NavLink className="hover:underline " href={link}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export { NavList };
