import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_NavBar.css";
import Button from "../Buttons/Button";
import ButtonAnchor from "../Buttons/ButtonAnchor";
import resumeFilePDF from "/src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";

export default function DesktopNav() {
  const [isPath, setIsPath] = useState("/");

  const handleClick = (location: any) => {
    const path = location.pathname;
    setIsPath(path);
  };

  return (
    <nav className="desktopNavBar-root">
      <div className="desktopNavBar-content">
        <Link to="/" className="desktopNavBar-main-logo">
          <h1 onClick={handleClick}>Kinxori</h1>
        </Link>
        <div className="desktopNavBar-CTA-buttons">
          <Button variant="ghostButton" to="/">
            <i className="fa-solid fa-house"></i> Home
          </Button>
          <Button variant="ghostButton" to="/projects">
            <i className="fa-solid fa-laptop-code"></i> Projects
          </Button>
          <Button variant="ghostButton" to="/motionprojects" target="_blank">
            <i className="fa-solid fa-film"></i> Motion Projects
          </Button>
          <Button variant="ghostButton" to="/contact">
            <i className="fa-solid fa-address-book"></i> Contact
          </Button>
          <Button variant="ghostButton" to="/about">
            <i className="fa-solid fa-user"></i> About me
          </Button>
          <ButtonAnchor variant="ghostButton" href={resumeFilePDF} download>
            <i className="fa-solid fa-download"></i> Download Resume
          </ButtonAnchor>
        </div>
      </div>
    </nav>
  );
}
