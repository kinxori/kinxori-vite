import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_navBar.css"


function PathIcon(props:any ){
    const {to, children, handleClick } = props;
    const location = useLocation();

    const handleClickWrapper = () => {
        handleClick(location);
      };

    return (
        <Link to={to} onClick={handleClickWrapper}>
            <button className={to === location.pathname ? "isActive" : "isIdle"}  >
                {children}
            </button>
        </Link>
    )
}

export default function MobileNav(){

    const [isPath, setIsPath] = useState("/")

    const handleClick = (location:any) => {
        const path = location.pathname
        setIsPath(path);
    };

    return(
            <nav className="mobileNavBar">
                <div className="mobileOptions" >
                    <PathIcon to="/" handleClick={handleClick}>                      
                            <i className="fa-solid fa-house"></i>
                    </PathIcon>
                    <PathIcon  to="/projects" handleClick={handleClick}>                   
                            <i className="fa-solid fa-folder"></i>
                    </PathIcon >
                    <PathIcon  to="https://github.com/kinxori" target="_blank" handleClick={handleClick}>
                            <i className="fa-brands fa-github"></i>
                    </PathIcon >
                    <PathIcon  to="/contact" handleClick={handleClick}>
                            <i className="fa-solid fa-address-book"></i>
                    </PathIcon >
                    <PathIcon  to="/about"  handleClick={handleClick}>
                            <i className="fa-solid fa-user"></i>
                    </PathIcon >
                </div>
            </nav>
    )
}