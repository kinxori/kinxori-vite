import { Link, useRouteError } from "react-router-dom"
import "./_Error404.css"
import Button from "../Buttons/Button"

const img404 = "/404Assets.png"


export default function Error404(){
    const error:any = useRouteError()

return(
    <article id="error-404">
        <img src={img404} alt="404error" />
        <span>
            <i> {error.message || error.statusText}</i> 🥸
        </span>     
        <Link to="/">
            <Button variant="mainButton">
                Back home 
            </Button>
        </Link>
    </article>
)
}