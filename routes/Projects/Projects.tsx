import { useEffect, useState } from "react"
import Button from "../../components/Buttons/Button"
import "./_projects.css"
import DemoCard from '../../components/DemoCard/DemoCard'
import ButtonAnchor from "../../components/Buttons/ButtonAnchor"


export default function Projects(){

    const [isClicked, setIsClicked] = useState(() => {
        const storedState = localStorage.getItem("isClicked");
        return storedState || null;
      });

    const [isActive, setIsActive] = useState(() => {
        const storedState = localStorage.getItem("isActive");
        return storedState ? storedState === "true" : false;
      })

    const [isFullScreen, setIsFullScreen] = useState(false)

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

    const handleFullScreen = ()=>{
        setIsFullScreen(!isFullScreen)
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
                        <DemoCard header={<><i className="fa-solid fa-cart-shopping"></i> Shopping Cart</>} isActive={isClicked === "card1"} onClick={() => handleCardClick("card1")} >
                            <div className={isFullScreen ? "projects-full-screen-img-open" : "projects-full-screen-img-close"} onClick={handleFullScreen}>
                                <Button variant="ghostButton" onClick={handleFullScreen}>Close</Button>
                                <img src="./shopping-cart.gif" alt="shopping-cart-feature"  />
                                <div></div>
                            </div>
                            <h3>How does this work? 🤔</h3>
                            <p>This feature updates the shopping cart's total price based on user input quantity and removes items from the cart.</p>
                            <h3>Skills 🛠</h3>
                            <ul>
                                <li>React.js</li>
                                <li>State management</li>
                                <li>React component architecture</li>
                                <li>User experience and interactivity</li>
                                <li>Testing and debugging</li>
                            </ul>
                            <h3>Advantages 🦾</h3>
                            <ul>
                                <li>Improved user experience</li>
                                <li>Increased sales</li>
                                <li>Customizable</li>
                                <li>Easy integration</li>
                                <li>Reusability</li>
                                <li>Analytics</li>
                            </ul>
                            <h3>Difficulties 🧠</h3>
                            <ul>
                                <li>State management and data flow</li>
                                <li>Handle user input and form data </li>
                                <li>Improve user experience with better organization of information</li>
                                <li>Integratation with external APIs to retrieve and update product information</li>
                            </ul>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px", gap:"20px" }}>
                                <Button to="/contact">
                                    Contact me!
                                </Button>
                                <ButtonAnchor variant="secButton" href="/404Assets.png" download>
                                    Download Resume
                                </ButtonAnchor>
                            </div>
                        </DemoCard>
                        <DemoCard header={<><i className="fa-solid fa-magnifying-glass"></i> Search Bar</>} isActive={isClicked === "card2"} onClick={() => handleCardClick("card2")}  >
                            <div className={isFullScreen ? "projects-full-screen-img-open" : "projects-full-screen-img-close"} onClick={handleFullScreen}>
                                <Button variant="ghostButton" onClick={handleFullScreen}>Close</Button>
                                <img src="./search-bar.gif" alt="search-bar-feature"  />
                                <div></div>
                            </div>
                            <h3>How does this work? 🤔</h3>
                            <p>This is a search bar component that filters and displays data in a table based on user input.</p>
                            <h3>Skills 🛠</h3>
                            <ul>
                                <li>Filtering and searching data</li>
                                <li>Componentization and modularity</li>
                                <li>Handling events and state changes</li>
                                <li>React.js</li>
                            </ul>
                            <h3>Advantages 🦾</h3>
                            <ul>
                                <li>Allows users to easily search and filter large datasets</li>
                                <li>Provides real-time search results as users type</li>
                                <li>Improves user experience by reducing the need to manually search and sort through data</li>
                            </ul>
                            <h3>Difficulties 🧠</h3>
                            <ul>
                                <li>Managing state</li>
                                <li>Filtering logic</li>
                                <li>Handling large datasets</li>
                                <li>Accessibility</li>
                            </ul>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px", gap:"20px" }}>
                                <Button to="/contact">
                                    Contact me!
                                </Button>
                                <ButtonAnchor variant="secButton" href="/404Assets.png" download>
                                    Download Resume
                                </ButtonAnchor>
                            </div>
                        </DemoCard>
                        <DemoCard header={<><i className="fa-solid fa-server"></i> Fetch API </>} isActive={isClicked === "card3"} onClick={() => handleCardClick("card3")} >
                            <div className={isFullScreen ? "projects-full-screen-img-open" : "projects-full-screen-img-close"} onClick={handleFullScreen}>
                                <Button variant="ghostButton" onClick={handleFullScreen}>Close</Button>
                                <img src="./fetch-api.gif" alt="fetch-api-feature"  />
                                <div></div>
                            </div>
                            <h3>How does this work? 🤔</h3>
                            <p>The code fetches data from the Rick & Morty API and displays characters' information. Clicking on a character's image shows their details.</p>
                            <h3>Skills 🛠</h3>
                            <ul>
                                <li>React.js</li>
                                <li>Fetching data from APIs</li>
                                <li>Event handling</li>
                                <li>Conditional rendering</li>
                                <li>Handling and displaying dynamic data</li>
                            </ul>
                            <h3>Advantages 🦾</h3>
                            <ul>
                                <li>Streamlined data manipulation</li>
                                <li>Greater efficiency</li>
                                <li>Simplified data retrieval</li>
                                <li>Improved data organization</li>
                                <li>Enhanced user experience</li>
                                <li>More effective information display</li>
                            </ul>
                            <h3>Difficulties 🧠</h3>
                            <ul>
                                <li>Handling multiple states and data flow</li>
                                <li>Managing complex user interactions and events</li>
                                <li>Working with external APIs and handling response data</li>
                                <li>Implementing efficient and performant rendering and updating of UI elements</li>
                            </ul>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0px", gap:"20px" }}>
                                <Button to="/contact">
                                    Contact me!
                                </Button>
                                <ButtonAnchor variant="secButton" href="/404Assets.png" download>
                                    Download Resume
                                </ButtonAnchor>
                            </div>
                        </DemoCard>
                    </section>
                } 
            </div>
        </article>
    )
}