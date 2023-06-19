import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_NavBar.css";
import Button from "../Buttons/Button";
import ButtonAnchor from "../Buttons/ButtonAnchor";

export default function DesktopNav() {
  const [isPath, setIsPath] = useState("/");

  const handleClick = (location: any) => {
    const path = location.pathname;
    setIsPath(path);
  };

  return (
    <nav className="desktopNavBar">
      <div className="desktopOptions">
        <Link to="/" className="desktopOptions-logo-img">
          <h1 onClick={handleClick}>Kinxori</h1>
        </Link>
        <div className="desktop-nav-CTA-buttons">
          <Button variant="ghostButton" to="/">
            Home <i className="fa-solid fa-house"></i>
          </Button>
          <Button variant="ghostButton" to="/projects">
            Projects <i className="fa-solid fa-briefcase"></i>
          </Button>
          <Button variant="ghostButton" to="https://github.com/kinxori" target="_blank">
            Github <i className="fa-brands fa-github"></i>
          </Button>
          <Button variant="ghostButton" to="/contact">
            Contact <i className="fa-solid fa-address-book"></i>
          </Button>
          <Button variant="ghostButton" to="/about">
            About me <i className="fa-solid fa-user"></i>
          </Button>
          <ButtonAnchor
            variant="ghostButton"
            href="/FrontEnd - Gustavo Quiroz - Resume.pdf"
            download
          >
            Download Resume <i className="fa-solid fa-download"></i>
          </ButtonAnchor>
        </div>
      </div>
    </nav>
  );
}
