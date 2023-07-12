import { useState } from "react";
import "./_NavBar.css";
import LinkButton from "@src/components/Buttons/LinkButton";
import { useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  return (
    <nav className="mobile-nav-bar-root">
      <div className="mobile-nav-bar-content">
        <LinkButton
          className={currentPath === "/" ? "isActive" : "isIdle"}
          variant="ghostButton"
          to="/"
          onClick={() => setCurrentPath("/")}
        >
          <i className="fa-solid fa-house"></i>
        </LinkButton>
        <LinkButton
          className={currentPath === "/webprojects" ? "isActive" : "isIdle"}
          variant="ghostButton"
          to="/webprojects"
          onClick={() => setCurrentPath("/webprojects")}
        >
          <i className="fa-solid fa-laptop-code"></i>
        </LinkButton>
        <LinkButton
          className={currentPath === "/motionprojects" ? "isActive" : "isIdle"}
          variant="ghostButton"
          to="/motionprojects"
          onClick={() => setCurrentPath("/motionprojects")}
        >
          <i className="fa-solid fa-film"></i>
        </LinkButton>
        <LinkButton
          className={currentPath === "/contact" ? "isActive" : "isIdle"}
          variant="ghostButton"
          to="/contact"
          onClick={() => setCurrentPath("/contact")}
        >
          <i className="fa-solid fa-address-book"></i>
        </LinkButton>
        <LinkButton
          className={currentPath === "/about" ? "isActive" : "isIdle"}
          variant="ghostButton"
          to="/about"
          onClick={() => setCurrentPath("/about")}
        >
          <i className="fa-solid fa-user"></i>
        </LinkButton>
      </div>
    </nav>
  );
}
