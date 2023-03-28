import { useRouteError } from "react-router-dom"
import React from "react"

export default function Error404(){
    const error:any = useRouteError()

return(
    <article id="error-404">
        <p>Oops! We got a 404 error, don't worry it's our fault and we are working to solve it! 👺</p>
        <p>
            <i> {error.message || error.statusText} </i>
        </p>
    </article>
)
}