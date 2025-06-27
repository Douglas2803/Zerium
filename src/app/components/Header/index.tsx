"use client";

import React, { useState } from "react";

import Logo from "./Logo/page";
import Hamburguer from "./Hamburguer/Hamburguer";
import { Sidebar } from "./Sidebar/Sidebar";
import NavList from "./Hamburguer/Nav-list/NavList";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setIsAnimate(!isAnimate);
  };

  return (
    <header className="container flex justify-between items-center pt-6">
      <Logo />

      <nav className="hidden md:flex">
        <NavList className="flex text-white items-center gap-8" />
      </nav>

      <div className="relative md:hidden">
        <Hamburguer onClick={toggleSidebar} isAnimate={isAnimate} />

        <Sidebar active={sidebarVisible} />
      </div>
    </header>
  );
};

export default Header;
