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
                        <DemoCard header="Shopping Cart" to="demo1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Search Bar" to="demo1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Fetch API" to="demo1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                    </section>
                } 
            </div>
        </article>
    )
}