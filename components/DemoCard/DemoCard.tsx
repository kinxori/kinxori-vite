import { Link } from "react-router-dom";
import './_demoCard.css'

export default function DemoCard ({
        header, 
        children, 
        isActive, 
        onClick, 
        id, 
    }: any){

    return(
        <div className={isActive === true ? "card-root-open" : "card-root-close"}>
            <div className="card-title">
                <h2>{header}</h2>
                <div>
                    <button onClick={onClick} id={id}>
                       <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}