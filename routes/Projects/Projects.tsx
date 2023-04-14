import { useEffect, useState } from "react"
import Button from "../../components/Buttons/Button"
import "./_projects.css"
import DemoCard from '../../components/DemoCard/DemoCard'
import { Outlet } from "react-router-dom"

export default function Projects(){

    const [isActive, setIsActive] = useState(() => {
        const storedState = localStorage.getItem("isActive");
        return storedState ? storedState === "true" : false;
      })
    
    useEffect(() => {
        localStorage.setItem("isActive", isActive.toString())
    }, [isActive]);

    const handleClick = ( )=>{
        setIsActive(!isActive)
    }
    return(
        <article className="projects-root">
            <div className="projects-content">
                <img src="/projects-asset.png" alt="project-asset" />
                <div className="projects-copy">
                    <h2>Check out my projects to see my <b>skills in action!</b> ✍️</h2>
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
                        <DemoCard header="Hola homelo chino" to="demo1">
                            Soy homelo chino
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Aqui voy a meter" to="projects/demo1">
                            
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <Outlet/>
                    </section>
                } 
            </div>
        </article>
    )
}