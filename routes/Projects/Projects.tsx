import { useState } from "react"
import Button from "../../components/Buttons/Button"
import "./_projects.css"

export default function Projects(){

    const [isActive, setIsActive] = useState(false)
    const handleClick = ( )=>{
        setIsActive(!isActive)
    }
    return(
        <article className="projects-root">
            <div className="projects-content">
                <img src="/projects-asset.png" alt="project-asset" />
                <div className="projects-copy">
                    <h2>Check out <b>my projects</b> to see my skills in action! ✍️</h2>
                    <p>
                        Take a look around and feel free to <b>reach out</b> if you have any <b>questions or comments.</b>
                    </p>
                </div>
            </div>
            <div className="projects-btn-form">
                <Button onClick={handleClick} variant="secButton">
                        {isActive === false ? "Open Projects" : "Close Projects"}
                </Button>
                {isActive === true &&
                    <section className="display-projects">
                                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim ipsam accusamus saepe labore tenetur dolorum pariatur animi fugit repudiandae aperiam illo cupiditate libero facere totam doloribus dolore, aut obcaecati.</h3>

                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim ipsam accusamus saepe labore tenetur dolorum pariatur animi fugit repudiandae aperiam illo cupiditate libero facere totam doloribus dolore, aut obcaecati.</h3>
                    </section>
                } 
            </div>
        </article>
    )
}