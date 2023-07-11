import "./_demoCard.css";

export default function DemoCard({ header, children, isActive, onClick, fullScreen }: any) {
  return (
    <div className={fullScreen ? "card-root-idle" : "card-root-active"}>
      <div className="card-headline" onClick={onClick}>
        <h3 className="card-headline-title">{header}</h3>
        <div>
          <span className={isActive ? "card-root-chevron-open" : "card-root-chevron-close"}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      <div className={isActive ? "card-body-open" : "card-body-close"}>{children}</div>
    </div>
  );
}
