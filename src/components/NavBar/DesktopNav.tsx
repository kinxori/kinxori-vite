import { Link } from "react-router-dom";
import "./_NavBar.css";
import LinkButton from "@src/components/Buttons/LinkButton";
import ButtonAnchor from "@src/components/Buttons/ButtonAnchor";
import resumeFilePDF from "@src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";

export default function DesktopNav() {
  return (
    <nav className="desktopNavBar-root">
      <div className="desktopNavBar-content">
        <Link to="/" className="desktopNavBar-main-logo">
          <h1>Kinxori</h1>
        </Link>
        <div className="desktopNavBar-CTA-buttons">
          <LinkButton variant="ghostButton" to="/" className>
            Home
          </LinkButton>
          <LinkButton variant="ghostButton" to="/webprojects">
            Web Projects
          </LinkButton>
          <LinkButton variant="ghostButton" to="/motionprojects">
            Motion Projects
          </LinkButton>
          <LinkButton variant="ghostButton" to="/contact">
            Contact
          </LinkButton>
          <LinkButton variant="ghostButton" to="/about">
            About
          </LinkButton>
          <ButtonAnchor variant="ghostButton" href={resumeFilePDF} download>
            Download CV
          </ButtonAnchor>
        </div>
      </div>
    </nav>
  );
}
