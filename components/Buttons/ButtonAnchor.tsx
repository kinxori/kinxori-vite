import "./_button.css";

export default function ButtonAnchor({
  children,
  className,
  onClick,
  target,
  variant = "mainButton",
  type,
  href,
  download,
}: any) {
  // {[x:string]:string | number | boolean})

  const classes: any = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <span className={className}>
      <a href={href} download={download} onClick={onClick} target={target} type={type}>
        <button className={classes[variant]}>{children}</button>
      </a>
    </span>
  );
}
