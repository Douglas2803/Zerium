"use client";

import React, { useState } from "react";

import Logo from "./Logo/page";
import Hamburguer from "./Hamburguer/Hamburguer";
import { Sidebar } from "./Sidebar/Sidebar";

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
      <Hamburguer onClick={toggleSidebar} isAnimate={isAnimate} />
      <Sidebar active={sidebarVisible} />
    </header>
  );
};

export default Header;
