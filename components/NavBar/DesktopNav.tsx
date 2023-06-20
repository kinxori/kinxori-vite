import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_NavBar.css";
import Button from "../Buttons/Button";
import ButtonAnchor from "../Buttons/ButtonAnchor";
import resumeFilePDF from "/src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";

export default function DesktopNav() {
  return (
    <nav className="desktopNavBar-root">
      <div className="desktopNavBar-content">
        <Link to="/" className="desktopNavBar-main-logo">
          <h1>Kinxori</h1>
        </Link>
        <div className="desktopNavBar-CTA-buttons">
          <Button variant="ghostButton" to="/" className>
            Home
          </Button>
          <Button variant="ghostButton" to="/webprojects">
            Web Projects
          </Button>
          <Button variant="ghostButton" to="/motionprojects">
            Motion Projects
          </Button>
          <Button variant="ghostButton" to="/contact">
            Contact
          </Button>
          <Button variant="ghostButton" to="/about">
            About
          </Button>
          <ButtonAnchor variant="ghostButton" href={resumeFilePDF} download>
            Resume
          </ButtonAnchor>
        </div>
      </div>
    </nav>
  );
}
