import React, { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  heref?: string;
  className?: string;
}

const NavLink = ({ children, href, className, ...props }: NavLinkProps) => {
  return (
    <a {...props} href={href} className={`${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
