import "./_button.css";

export default function Button({
  children,
  className,
  onClick,
  variant = "mainButton",
  type,
}: any) {
  const classes: any = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
  };

  return (
    <span className={className}>
      <button className={classes[variant]} onClick={onClick} type={type}>
        {children}
      </button>
    </span>
  );
}
