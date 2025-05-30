import React, { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  heref?: string;
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  return (
    <a {...props} href={href}>
      {children}
    </a>
  );
};

export default NavLink;