import { Link } from "react-router-dom";

export default function MobileNav(){
    return(
            <nav>
                <p>This is Desktop </p>
                <div>
                    <Link to="">
                        <button>
                            <img src=""/>
                            Kinxori
                        </button>
                    </Link>
                    <Link to="projects">
                        <button>
                           Projects
                        </button>
                    </Link>
                    <Link to="https://github.com/kinxori">
                        <button>
                                Github
                        </button>
                    </Link>
                    <Link to="aboutme">
                        <button>
                           About Me
                        </button>
                    </Link>
                </div>
            </nav>
    )
}