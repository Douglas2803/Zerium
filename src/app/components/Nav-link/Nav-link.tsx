import React, { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <a {...props}>
      {children}
    </a>
  );
};

export default NavLink;