import "./_button.css"

export default function Button({
    children, 
    variant = "mainButton",
}: any){

    const classes: any = {
        mainButton: "mainButton",
        secButton: "secButton",
        ghostButton: "ghostButton",
        linkButton: "linkButton"
    }

    return(
        <button className={classes[variant]}>
            {children}
        </button>
    )
}