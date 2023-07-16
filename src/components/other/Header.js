import React, { useState } from "react";
import Link from "@docusaurus/Link";

import RightPart from "./Header/RightPart";
import useResponsive from "../../hooks/useResponsive";
import "./Header.css";
import Nav from "./Header/Nav";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpenedSidebar, setOpenedSidebar] = useState(false);
  const { isTabletWidth } = useResponsive();
  const logoPath = `/img/logo-mono.svg`;

  const handleToggle = () => {
    setOpenedSidebar((state) => !state);
  };

  const handleClose = () => {
    setOpenedSidebar(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header__logo">
            <img src={logoPath} alt="logo" />
          </Link>
          {!isTabletWidth && <Nav />}
          <RightPart
            onToggle={handleToggle}
          />
        </div>
      </header>
      {isTabletWidth && (
        <Sidebar
          isOpenedSidebar={isOpenedSidebar}
          onClose={handleClose}
          onToggle={handleToggle}
        />
      )}
    </>
  );
};

export default Header;
