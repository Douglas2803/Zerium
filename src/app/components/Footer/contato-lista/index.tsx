import NavLink from "../../Nav-link/Nav-link";

const contatoLista = [
  {
    name: "Whatsapp icon",
    image: "/assets/icons/whatsapp.svg",
    url: "https://wa.me/5554981229448",
    altText: "Whatsapp icon",
  },
  // {
  //   name: "Instagram icon",
  //   image: "/assets/icons/instagram.svg",
  //   url: "",
  //   altText: "Instagram icon",
  // },
];

const ContatoLista = () => {
  return (
    <>
      <ul className="w-full flex justify-center gap-5 h-6">
        {contatoLista.map(({ name, image, url, altText }) => {
          return (
            <li key={name} className="h-6 w-6  fill-primary">
              <NavLink href={url}>
                <img
                  src={image}
                  alt={altText}
                  className="h-full w-full"
                  loading="lazy"
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { ContatoLista };
