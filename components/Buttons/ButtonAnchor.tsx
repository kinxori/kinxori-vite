import "./_button.css"

export default function ButtonAnchor({
    children, 
    className,
    onClick,
    target,
    variant = "mainButton",
    type,
    download,
    href,
    ...props
}: 
// {[x:string]:string | number | boolean})
{[x:string]:any})
{

    const classes: any = {
        mainButton: "mainButton",
        secButton: "secButton",
        ghostButton: "ghostButton",
        linkButton: "linkButton",
        desktopButton: "desktopButton"
    }


        return(
            <span className={className}>
                <a href={href} download={download} onClick={onClick} target={target}>
                    <button className={classes[variant]} type={type}>
                        {children}
                    </button>
                </a>
            </span>
        );

}