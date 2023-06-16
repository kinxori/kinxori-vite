import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_NavBar.css";

function PathIcon(props: any) {
  const { to, children, handleClick, target } = props;
  const location = useLocation();

  const handleClickWrapper = () => {
    handleClick(location);
  };

  return (
    <Link to={to} onClick={handleClickWrapper} target={target}>
      <button className={to === location.pathname ? "isActive" : "isIdle"}>{children}</button>
    </Link>
  );
}

export default function MobileNav() {
  const [isPath, setIsPath] = useState("/");

  const handleClick = (location: any) => {
    const path = location.pathname;
    setIsPath(path);
  };

  return (
    <nav className="mobile-nav-bar-root">
      <div className="mobile-nav-bar-content">
        <PathIcon to="/" handleClick={handleClick}>
          <i className="fa-solid fa-house"></i>
        </PathIcon>
        <PathIcon to="/webprojects" handleClick={handleClick}>
          <i className="fa-solid fa-laptop-code"></i>
        </PathIcon>
        <PathIcon to="/motionprojects" handleClick={handleClick}>
          <i className="fa-solid fa-film"></i>
        </PathIcon>
        <PathIcon to="/contact" handleClick={handleClick}>
          <i className="fa-solid fa-address-book"></i>
        </PathIcon>
        <PathIcon to="/about" handleClick={handleClick}>
          <i className="fa-solid fa-user"></i>
        </PathIcon>
      </div>
    </nav>
  );
}
