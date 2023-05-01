import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_NavBar.css"
import Button from "../Buttons/Button";
import ButtonAnchor from "../Buttons/ButtonAnchor";



export default function DesktopNav(){
    const [isPath, setIsPath] = useState("/")
    const [isSideBar, setIsSideBar] = useState(false)

    const handleClick = (location:any) => {
        const path = location.pathname
        setIsPath(path);
    };


    const handleSideBarClick = ()=>{
        setIsSideBar(!isSideBar)
    }



    return(
            <nav className="desktopNavBar">
                <div className="desktopOptions" >
                    <Link to="/" className="desktopOptions-logo-img">
                        <img src="/kinxori-logo-just-text.png" alt="kinxori-logo" onClick={handleClick}></img >
                    </Link>
                    <div className="desktop-nav-CTA-buttons">
                        <Button to="/projects" variant="desktopSecButton">
                        <i className="fa-solid fa-briefcase"></i> Projects 
                        </Button>
                        <Button to="/contact"  variant="desktopMainButton">
                        <i className="fa-solid fa-address-book"></i> Contact 
                        </Button>
                        <button className="isActive">
                            <i className="fa-solid fa-bars" onClick={handleSideBarClick} ></i>
                        </button>
                        <section className={isSideBar === true ? "sideBar-open" : "sideBar-close"}>
                            <div className="dekstop-nav-sideBar">
                                <i className="fa-solid fa-circle-xmark" onClick={handleSideBarClick}></i>
                                <div className="sideBar-body">
                                     <Button variant="ghostButton" to="/" onClick={handleSideBarClick}>
                                        Home <i className="fa-solid fa-house"></i>
                                     </Button>
                                     <Button variant="ghostButton" to="/projects" onClick={handleSideBarClick}>
                                         Projects <i className="fa-solid fa-briefcase"></i>
                                     </Button>
                                     <Button variant="ghostButton" to="https://github.com/kinxori" target="_blank" onClick={handleSideBarClick}>
                                          Github <i className="fa-brands fa-github"></i>
                                      </Button>
                                      <Button variant="ghostButton" to="/contact" onClick={handleSideBarClick}>
                                          Contact <i className="fa-solid fa-address-book"></i>
                                     </Button>
                                     <Button variant="ghostButton" to="/about" onClick={handleSideBarClick}>
                                         About me <i className="fa-solid fa-user"></i>
                                     </Button>
                                     <ButtonAnchor variant="ghostButton" href="/FrontEnd - Gustavo Quiroz - Resume.pdf" download onClick={handleSideBarClick}>
                                        Download Resume <i className="fa-solid fa-download"></i>
                                     </ButtonAnchor>
                                     <i className="fa-solid fa-circle-info" onClick={handleSideBarClick}></i>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </nav>
    )
}