import Button from "../../../../components/Buttons/Button";

export default function Demo1(){
    return (
        <article>
            <div>Hola mundo</div>
            <Button to="/projects" variant="mainButton">
                Go back projects
            </Button>
        </article>
    )
}