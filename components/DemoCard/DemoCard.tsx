import { Link } from "react-router-dom";
import './_demoCard.css'

export default function DemoCard ({header, to, children}: any){
    return(
        <div className="card-root">
            <div className="card-title">
                {header}
                <Link to={to}>
                    <button>
                       <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </Link>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}