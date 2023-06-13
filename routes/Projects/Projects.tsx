import { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import "./_projects.css";
import DemoCard from "../../components/DemoCard/DemoCard";
import ButtonAnchor from "../../components/Buttons/ButtonAnchor";

export default function Projects() {
  const [isClicked, setIsClicked] = useState(() => {
    const storedState = localStorage.getItem("isClicked");
    return storedState || null;
  });
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("isActive");
    return storedState ? storedState === "true" : false;
  });
  const [isFullScreen, setIsFullScreen] = useState("");
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  useEffect(() => {
    if (isClicked !== null) {
      localStorage.setItem("isClicked", isClicked);
    }
  }, [isClicked]);

  useEffect(() => {
    localStorage.setItem("isActive", isActive.toString());
  }, [isActive]);

  const handleCardClick = (id: any) => {
    setIsClicked((currentValue: any) => (currentValue !== id ? id : false));
  };

  const handleProjectsButton = () => {
    setIsActive(!isActive);
  };

  const handleFullScreen = (id: any) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <article className="projects-root">
      <div className="projects-content">
        <img src="/projects-asset.png" alt="notebook-with-pencil" />
        <div className="projects-copy">
          <h2>
            Check out <b>my skills </b> in action! 🎯
          </h2>
          <br />
          <p>
            Take a look around to some of my <b>projects</b> I've been learning and
            <b> improving </b>
            along my <b>web developer career.</b>
          </p>
          <Button onClick={handleProjectsButton} variant="secButton" className="projects-CTA">
            {isActive === false ? "Open Projects" : "Close Projects"}
          </Button>
        </div>
      </div>
      {isActive === true && (
        <section className="projects-display-cards">
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;Features
              </>
            }
            isActive={isClicked === "card1"}
            onClick={() => handleCardClick("card1")}
          >
            <div className="projects-display-cards-shopping-cart">
              <div
                className={
                  isFullScreen === "1"
                    ? "projects-full-screen-img-open"
                    : "projects-full-screen-img-close"
                }
                onClick={() => handleFullScreen("1")}
              >
                <Button variant="linkButton">Close</Button>
                {isLoadingVideo && (
                  <h3 className="projects-full-screen-loader">Loading video...𛱘</h3>
                )}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-functionality-video.mov?alt=media&token=324db9e4-dc38-4227-a574-a3a9080f2797"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                ></video>
                <div></div>
              </div>
              <h3>
                <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
              </h3>
              <p>
                This feature updates the shopping cart's total price based on user input quantity
                and removes items from the cart.
              </p>
              <h3>Technologies used 💡</h3>
              <ul>
                <li>
                  <i className="fa-brands fa-react"></i> React
                </li>
                <li>
                  <i className="fa-brands fa-square-js"></i> Javascript
                </li>
                <li>
                  <i className="fa-brands fa-html5"></i> HTML
                </li>
                <li>
                  <i className="fa-brands fa-css3"></i> CSS
                </li>
              </ul>
              <h3>Skills 🧠</h3>
              <ul>
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
              <h3>Difficulties ⚙️</h3>
              <ul>
                <li>State management and data flow</li>
                <li>Handle user input and form data </li>
                <li>Improve user experience with better organization of information</li>
                <li>Integratation with external APIs to retrieve and update product information</li>
              </ul>
              <div className="projects-display-cards-CTA">
                <Button to="https://kinxori.github.io/react-shopping-cart/" target="_blank">
                  Live Project
                </Button>
                <Button
                  to="https://github.com/kinxori/react-shopping-cart"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </Button>
              </div>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
              </>
            }
            isActive={isClicked === "card1"}
            onClick={() => handleCardClick("card1")}
          >
            <div
              className={
                isFullScreen === "1"
                  ? "projects-full-screen-img-open"
                  : "projects-full-screen-img-close"
              }
              onClick={() => handleFullScreen("1")}
            >
              <Button variant="linkButton">Close</Button>
              {isLoadingVideo && <h3 className="projects-full-screen-loader">Loading video...𛱘</h3>}
              <video
                src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-functionality-video.mov?alt=media&token=324db9e4-dc38-4227-a574-a3a9080f2797"
                onLoadedData={() => setIsLoadingVideo(false)}
                loop
                autoPlay
                controls={false}
                muted
              ></video>
              <div></div>
            </div>
            <h3>How does it work? 🤔</h3>
            <p>
              This feature updates the shopping cart's total price based on user input quantity and
              removes items from the cart.
            </p>
            <h3>Technologies used 💡</h3>
            <ul>
              <li>
                <i className="fa-brands fa-react"></i> React
              </li>
              <li>
                <i className="fa-brands fa-square-js"></i> Javascript
              </li>
              <li>
                <i className="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i className="fa-brands fa-css3"></i> CSS
              </li>
              <li>
                <i className="fa-brands fa-node"></i> NodeJS
              </li>
            </ul>
            <h3>Skills 🧠</h3>
            <ul>
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
            <h3>Difficulties ⚙️</h3>
            <ul>
              <li>State management and data flow</li>
              <li>Handle user input and form data </li>
              <li>Improve user experience with better organization of information</li>
              <li>Integratation with external APIs to retrieve and update product information</li>
            </ul>
            <div className="projects-display-features-buttons-CTA">
              <Button to="/contact">Contact me!</Button>
              <ButtonAnchor
                variant="secButton"
                href="/FrontEnd - Gustavo Quiroz - Resume.pdf"
                download
              >
                Download Resume
              </ButtonAnchor>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-magnifying-glass"></i> Search Bar
              </>
            }
            isActive={isClicked === "card2"}
            onClick={() => handleCardClick("card2")}
          >
            <div
              className={
                isFullScreen === "2"
                  ? "projects-full-screen-img-open"
                  : "projects-full-screen-img-close"
              }
              onClick={() => handleFullScreen("2")}
            >
              <Button variant="linkButton">Close</Button>
              {isLoadingVideo && <h3 className="projects-full-screen-loader">Loading video...𛱘</h3>}
              <video
                src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/search%20bar%20edited.mov?alt=media&token=4cf3a15b-8a9d-4548-8590-9602af1d62d4"
                onLoadedData={() => setIsLoadingVideo(false)}
                loop
                autoPlay
                controls={false}
                muted
              ></video>
              <div></div>
            </div>
            <h3>How does it work? 🤔</h3>
            <p>
              This is a search bar component that filters and displays data in a table based on user
              input.
            </p>
            <h3>Technologies used 💡</h3>
            <ul>
              <li>
                <i className="fa-brands fa-react"></i> React
              </li>
              <li>
                <i className="fa-brands fa-square-js"></i> Javascript
              </li>
              <li>
                <i className="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i className="fa-brands fa-css3"></i> CSS
              </li>
              <li>
                <i className="fa-brands fa-node"></i> NodeJS
              </li>
            </ul>
            <h3>Skills 🧠</h3>
            <ul>
              <li>Filtering and searching data</li>
              <li>Componentization and modularity</li>
              <li>Handling events and state changes</li>
            </ul>
            <h3>Advantages 🦾</h3>
            <ul>
              <li>Allows users to easily search and filter large datasets</li>
              <li>Provides real-time search results as users type</li>
              <li>
                Improves user experience by reducing the need to manually search and sort through
                data
              </li>
            </ul>
            <h3>Difficulties ⚙️</h3>
            <ul>
              <li>Managing state</li>
              <li>Filtering logic</li>
              <li>Handling large datasets</li>
              <li>Accessibility</li>
            </ul>
            <div className="projects-display-features-buttons-CTA">
              <Button to="/contact">Contact me!</Button>
              <ButtonAnchor
                variant="secButton"
                href="/FrontEnd - Gustavo Quiroz - Resume.pdf"
                download
              >
                Download Resume
              </ButtonAnchor>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-server"></i> Fetch API{" "}
              </>
            }
            isActive={isClicked === "card3"}
            onClick={() => handleCardClick("card3")}
          >
            <div
              className={
                isFullScreen === "3"
                  ? "projects-full-screen-img-open"
                  : "projects-full-screen-img-close"
              }
              onClick={() => handleFullScreen("3")}
            >
              <Button variant="linkButton">Close</Button>
              {isLoadingVideo && <h3 className="projects-full-screen-loader">Loading video...𛱘</h3>}
              <video
                src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-api-edited.mov?alt=media&token=daa9385e-2ee5-492e-9d6f-42b8865a65eb"
                onLoadedData={() => setIsLoadingVideo(false)}
                loop
                autoPlay
                controls={false}
                muted
              ></video>
              <div></div>
            </div>
            <h3>How does it work? 🤔</h3>
            <p>
              The code fetches data from the Rick & Morty API and displays characters' information.
              Clicking on a character's image shows their details.
            </p>
            <h3>Technologies used 💡</h3>
            <ul>
              <li>
                <i className="fa-brands fa-react"></i> React
              </li>
              <li>
                <i className="fa-brands fa-square-js"></i> Javascript
              </li>
              <li>
                <i className="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i className="fa-brands fa-css3"></i> CSS
              </li>
              <li>
                <i className="fa-brands fa-node"></i> NodeJS
              </li>
            </ul>
            <h3>Skills 🧠</h3>
            <ul>
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
            <h3>Difficulties ⚙️</h3>
            <ul>
              <li>Handling multiple states and data flow</li>
              <li>Managing complex user interactions and events</li>
              <li>Working with external APIs and handling response data</li>
              <li>Implementing efficient and performant rendering and updating of UI elements</li>
            </ul>
            <div className="projects-display-features-buttons-CTA">
              <Button to="/contact">Contact me!</Button>
              <ButtonAnchor
                variant="secButton"
                href="/FrontEnd - Gustavo Quiroz - Resume.pdf"
                download
              >
                Download Resume
              </ButtonAnchor>
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
