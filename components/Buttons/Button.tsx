import { Link } from "react-router-dom"
import "./_button.css"

export default function Button({
    children, 
    className,
    to,
    onClick,
    target,
    variant = "mainButton",
    type,
}: any){

    const classes: any = {
        mainButton: "mainButton",
        secButton: "secButton",
        ghostButton: "ghostButton",
        linkButton: "linkButton"
    }

    return(
        <span className={className}> 
            <Link to={to} target={target} >
                <button className={classes[variant]} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        </span>
    )
}