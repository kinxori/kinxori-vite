import { useRouteError } from "react-router-dom";
import "./_Error404.css";
import Button from "../Buttons/Button";

const img404 = "./../../src/assets/404Assets.png";

export default function Error404() {
  const error: any = useRouteError();

  return (
    <article className="error-404-root">
      <img
        src={img404}
        alt="Purple gorilla in a couch holding a cellphone with a pop-up message saying 'Oops! 404' declaring it's a failed route in the page - Kinxori 404 error page"
      />
      <h2>
        <i> {error.message || error.statusText}</i> 🥸
      </h2>
      <Button variant="mainButton" to="/" className="error404-btn">
        Back home
      </Button>
    </article>
  );
}
