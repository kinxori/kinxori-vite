import { Link, useRouteError } from "react-router-dom"
import "./_Error404.css"
import Button from "../Buttons/Button"


export default function Error404(){
    const error:any = useRouteError()

return(
    <article id="error-404">
        <img src="components/Error404/404Assets.png" alt="404error" />
        <i> {error.message || error.statusText} 🥸 </i>
        <Link to="/">
            <Button variant="mainButton">
                Back home 
            </Button>
        </Link>
    </article>
)
}