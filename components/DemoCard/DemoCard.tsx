import { Link } from "react-router-dom";
import './_demoCard.css'

export default function DemoCard ({header, to, children, isActive, onClick, }: any){

    return(
        <div className={isActive === true ? "card-root-open" : "card-root-close"}>
            <div className="card-title">
                {header}
                <Link to={to}>
                    <button onClick={onClick} >
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