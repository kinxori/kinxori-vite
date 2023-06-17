import { useEffect, useState } from "react";
import Button from "./../../components/Buttons/Button";
import DemoCard from "./../../components/DemoCard/DemoCard";
import "./_projects.css";
import mainProjectsAsset from "/src/assets/projects-asset.png";

export default function Projects() {
  const [isClicked, setIsClicked] = useState(() => {
    const storedState = localStorage.getItem("isClicked");
    return storedState || null;
  });
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("isProjectsButtonActive");
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
    localStorage.setItem("isProjectsButtonActive", isActive.toString());
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
        <img src={mainProjectsAsset} alt="purple notebook with pencil - Kinxori Projects Route" />
        <div className="projects-copy">
          <h2>
            Check out <b>web developer</b> projects in action! 💻
          </h2>
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
        <section className="projects-display-projects-cards">
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;Features
              </>
            }
            isActive={isClicked === "features-card"}
            onClick={() => handleCardClick("features-card")}
          >
            <div className="projects-display-card">
              <div
                className={
                  isFullScreen === "shopping-card-asset"
                    ? "projects-full-screen-asset-open"
                    : "projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("shopping-card-asset")}
              >
                <Button className="projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && <h3 className="projects-card-asset-loader">Loading video...</h3>}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-functionality-video.mov?alt=media&token=324db9e4-dc38-4227-a574-a3a9080f2797"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                  className="projects-display-card-asset"
                ></video>
                <div className="projects-full-screen-bg"></div>
              </div>
              <h2>Shopping Cart</h2>
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
            <hr></hr>
            <div className="projects-display-card">
              <div
                className={
                  isFullScreen === "search-bar-asset"
                    ? "projects-full-screen-asset-open"
                    : "projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("search-bar-asset")}
              >
                <Button className="projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && <h3 className="projects-card-asset-loader">Loading video...</h3>}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/search%20bar%20edited.mov?alt=media&token=4cf3a15b-8a9d-4548-8590-9602af1d62d4"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                  className="projects-display-card-asset"
                ></video>
                <div className="projects-full-screen-bg"></div>
              </div>
              <h2>Search Bar</h2>
              <p>
                This is a search bar component that filters and displays data in a table based on
                user input.
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
              <div className="projects-display-cards-CTA">
                <Button to="https://kinxori.github.io/react-practice-5/" target="_blank">
                  Live Project
                </Button>
                <Button
                  to="https://github.com/kinxori/react-practice-5"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </Button>
              </div>
            </div>
            <hr></hr>
            <div className="projects-display-card">
              <div
                className={
                  isFullScreen === "fetch-api-asset"
                    ? "projects-full-screen-asset-open"
                    : "projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("fetch-api-asset")}
              >
                <Button className="projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && <h3 className="projects-card-asset-loader">Loading video...</h3>}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-api-edited.mov?alt=media&token=daa9385e-2ee5-492e-9d6f-42b8865a65eb"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                  className="projects-display-card-asset"
                ></video>
                <div className="projects-full-screen-bg"></div>
              </div>
              <h2>Fetch API</h2>
              <p>
                The code fetches data from the Rick & Morty API and displays characters'
                information. Clicking on a character's image shows their details.
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
                <li>Fetching data from APIs</li>
                <li>Event handling</li>
                <li>Conditional rendering</li>
                <li>Handling and displaying dynamic data</li>
              </ul>
              <h3>Advantages 🦾</h3>
              <ul>
                <li>Streamlined data manipulation</li>
                <li>Simplified data retrieval</li>
                <li>Improved data organization</li>
                <li>More effective information display</li>
              </ul>
              <h3>Difficulties ⚙️</h3>
              <ul>
                <li>Handling multiple states and data flow</li>
                <li>Managing complex user interactions and events</li>
                <li>Working with external APIs and handling response data</li>
                <li>Implementing efficient and performant rendering and updating of UI elements</li>
              </ul>
              <div className="projects-display-cards-CTA">
                <Button to="https://kinxori.github.io/react-practice-4/" target="_blank">
                  Live Project
                </Button>
                <Button
                  to="https://github.com/kinxori/react-practice-4"
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
                <i className="fa-solid fa-pager"></i>&nbsp;&nbsp;Apps
              </>
            }
            isActive={isClicked === "web-projects-card"}
            onClick={() => handleCardClick("web-projects-card")}
          >
            <div className="projects-display-card">
              {/* <div
                className={
                  isFullScreen === "fetch-api-asset"
                    ? "projects-full-screen-asset-open"
                    : "projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("fetch-api-asset")}
              >
                <Button className="projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && (
                  <h3 className="projects-card-asset-loader">Loading video...</h3>
                )}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-api-edited.mov?alt=media&token=daa9385e-2ee5-492e-9d6f-42b8865a65eb"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                ></video>
                <div></div>
              </div> */}
              <h2>Under construction ⚙️</h2>
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
