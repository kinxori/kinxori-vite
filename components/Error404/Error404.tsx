import { Link, useRouteError } from "react-router-dom";
import "./_Error404.css";
import Button from "../Buttons/Button";

const img404 = "/404Assets.png";

export default function Error404() {
  const error: any = useRouteError();

  return (
    <article className="error-404-root">
      <img src={img404} alt="404error-asset" />
      <h2>
        <i> {error.message || error.statusText}</i> 🥸
      </h2>
      <Button variant="mainButton" to="/" className="error404-btn">
        Back home
      </Button>
    </article>
  );
}
