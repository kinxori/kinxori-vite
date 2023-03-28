import { Link } from "react-router-dom";

export default function MobileNav(){
    return(
            <nav className="mobileNavBar">
                <div className="mobileOptions" >
                    <Link to="">
                        <button>
                            <i className="fa-solid fa-house"></i>
                        </button>
                    </Link>
                    <Link to="projects">
                        <button>
                            <i className="fa-solid fa-folder"></i>
                        </button>
                    </Link>
                    <Link to="https://github.com/kinxori" target="_blank">
                        <button>
                            <i className="fa-brands fa-github"></i>
                        </button>
                    </Link>
                    <Link to="contact">
                        <button>
                            <i className="fa-solid fa-address-book"></i>
                        </button>
                    </Link>
                    <Link to="aboutme">
                        <button>
                            <i className="fa-solid fa-user"></i>
                        </button>
                    </Link>
                    
                </div>
            </nav>
    )
}