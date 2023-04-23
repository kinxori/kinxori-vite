import { useEffect, useState } from "react"
import Button from "../../components/Buttons/Button"
import "./_projects.css"
import DemoCard from '../../components/DemoCard/DemoCard'

export default function Projects(){

    const [isClicked, setIsClicked] = useState(() => {
        const storedState = localStorage.getItem("isClicked");
        return storedState || null;
      });

    const [isActive, setIsActive] = useState(() => {
        const storedState = localStorage.getItem("isActive");
        return storedState ? storedState === "true" : false;
      })
    useEffect(() => {
        if (isClicked !== null){
            localStorage.setItem("isClicked", isClicked);
        }
    }, [isClicked]);

    useEffect(() => {
        localStorage.setItem("isActive", isActive.toString())
    }, [isActive]);

    const handleCardClick = (id:any)=>{
        setIsClicked((currentValue : any) => currentValue !== id ? id : false)
    };

    const handleProjectsButton = ( )=>{
        setIsActive(!isActive)
    }

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
                <Button onClick={handleProjectsButton} variant="secButton" className="projects-CTA">
                        {isActive === false ? "Open Projects" : "Close Projects"}
                </Button>
                {isActive === true &&
                    <section className="projects-display-features">
                        <DemoCard header="Shopping Cart" isActive={isClicked === "card1"} onClick={() => handleCardClick("card1")} >
                            <img src="./404Assets.png" alt="" />
                            <p>This feature updates the shopping cart's total price based on user input quantity and removes items from the cart.</p>
                        </DemoCard>
                        <DemoCard header="Search Bar" isActive={isClicked === "card2"} onClick={() => handleCardClick("card2")}  >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                        <DemoCard header="Fetch API" isActive={isClicked === "card3"} onClick={() => handleCardClick("card3")} >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae beatae enim, sed voluptatum deleniti, cupiditate corrupti, molestiae perferendis sint quia ullam obcaecati neque ea natus placeat recusandae corporis modi.</p>
                            <img src="./404Assets.png" alt="" />
                        </DemoCard>
                    </section>
                } 
            </div>
        </article>
    )
}