import NavLink from "../../../Nav-link/Nav-link";

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
  // {
  //   text: "Cases",
  //   link: "#cases",
  // },
];

interface INavListProps {
  className?: string;
}

const NavList = ({ className }: INavListProps) => {
  return (
    <ul className={`${className}`}>
      {navList.map(({ text, link }) => {
        return (
          <li key={text} className="text-md justify-evenly py-2 text-primary">
            <NavLink className="hover:underline " href={link}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
