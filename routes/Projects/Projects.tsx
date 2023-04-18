import { useEffect, useState } from "react"
import Button from "../../components/Buttons/Button"
import "./_projects.css"
import DemoCard from '../../components/DemoCard/DemoCard'
import { Outlet } from "react-router-dom"

export default function Projects(){

    const [isClicked, setIsClicked] = useState(null);
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

    const handleCard = (id:any)=>{
        setIsClicked((currentValue : any) => currentValue !== id ? id : false)
    };
    return(
        <article className="projects-root">
            <div className="projects-content">
                <img src="/projects-asset.png" alt="project-asset" />
                <div className="projects-copy">
                    <h2>Check out my projects to see my <b>skills in action!</b> ✍️</h2>
                    <p>
                        Take a look around to some of my <b>features</b> I've been learning and <b>improving</b> along my <b>web developer career.</b>
                    </p>
                </div>
            </div>
            <div className="projects-btn-display">
                <Button onClick={handleClick} variant="secButton" className="projects-CTA">
                        {isActive === false ? "Open Projects" : "Close Projects"}
                </Button>
                {isActive === true &&
                    <section className="projects-display-features">
                        <DemoCard header="Shopping Cart" isActive={isClicked === "card1"} onClick={() => handleCard("card1")} >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Search Bar" isActive={isClicked === "card2"} onClick={() => handleCard("card2")}  >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Fetch API" isActive={isClicked === "card3"} onClick={() => handleCard("card3")} >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                    </section>
                } 
            </div>
        </article>
    )
}