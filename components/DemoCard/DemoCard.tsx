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
                <h3>{header}</h3>
                <div>
                    <span onClick={onClick} id={id}>
                       <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}