import NavLink from "../../Nav-link/Nav-link";

const navLista = [
  {
    text: "Politica de Privacidade",
    link: "#",
  },
  {
    text: "Termos de Serviços",
    link: "#",
  },
  {
    text: "Cookies e Configuração",
    link: "#",
  },
];

const NavLista = () => {
  return (
    <ul className="underline flex flex-col text-center gap-y-4 sm:flex-row lg:gap-x-6 text-grey_2 text-sm sm:text-lg">
      {navLista.map(({ text, link }) => {
        return (
          <li key={text}>
            <NavLink href={link}>{text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export { NavLista };
