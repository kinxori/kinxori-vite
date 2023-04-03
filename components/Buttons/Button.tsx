import { Link } from "react-router-dom"
import "./_button.css"

export default function Button({
    children, 
    className,
    to,
    onClick,
    target,
    variant = "mainButton",
}: any){

    const classes: any = {
        mainButton: "mainButton",
        secButton: "secButton",
        ghostButton: "ghostButton",
        linkButton: "linkButton"
    }

    return(
        <span className={className}> 
            <Link to={to} target={target}>
                <button className={classes[variant]} onClick={onClick} >
                    {children}
                </button>
            </Link>
        </span>
    )
}