import { useEffect, useState, Suspense, lazy } from "react";
import "./_webProjects.css";
import Button from "@src/components/Buttons/Button";
import ButtonAnchor from "@src/components/Buttons/ButtonAnchor";
import CardDisplay from "@src/components/CardDisplay/CardDisplay";
import mainProjectsAsset from "@src/assets/projects-asset.png";
import typescriptLogo from "@src/assets/Logos/typescript-png-logo-500x500-white.png";
import tailwindLogo from "@src/assets/Logos/tailwindcss-png-logo-500x500-white.png";

const VideoLoader = lazy(() => import("@src/components/VideoLoader/VideoLoader"));

export default function Projects() {
  const [fullScreenAsset, setFullScreenAsset] = useState("");
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("StoredWebProjects");
    return storedState ? storedState === "true" : false;
  });
  const [cardClicked, setCardClicked] = useState(() => {
    const storedState = localStorage.getItem("StoredCardClicked");
    return storedState || null;
  });

  useEffect(() => {
    if (cardClicked !== null) {
      localStorage.setItem("StoredCardClicked", cardClicked);
    }
  }, [cardClicked]);

  useEffect(() => {
    localStorage.setItem("StoredWebProjects", isActive.toString());
  }, [isActive]);

  const handleFullScreen = (id: string) => {
    setFullScreenAsset((currenValue) => (currenValue !== id ? id : ""));
  };

  const handleCardClick = (id: string) => {
    setCardClicked((currentValue) => (currentValue !== id ? id : ""));
  };

  return (
    <article className="web-projects-root">
      <div className="web-projects-content">
        <img
          src={mainProjectsAsset}
          alt="purple notebook with pencil - Kinxori Projects Route"
          className="web-projects-main-asset"
        />
        <div className="web-projects-copy">
          <h2>
            Check out <b>web developer</b> projects in action! 💻
          </h2>
          <p>
            Take a look around to some of my <b>projects</b> I've been learning and
            <b> improving </b>
            along my <b>web developer career.</b>
          </p>
          <div className="web-projects-CTA">
            <Button onClick={() => setIsActive(!isActive)} variant="secButton">
              {isActive === false ? "Open Projects" : "Close Projects"}
            </Button>
          </div>
        </div>
      </div>
      {isActive === true && (
        <section className="web-projects-display-cards">
          {fullScreenAsset !== "" && (
            <>
              <Button
                className="web-projects-full-screen-close-button"
                variant="linkButton"
                onClick={() => handleFullScreen("")}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </Button>
              <div
                className="web-projects-full-screen-bg"
                onClick={() => handleFullScreen("")}
              ></div>
            </>
          )}
          <CardDisplay
            header={
              <>
                <i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;Features
              </>
            }
            isActive={cardClicked === "features-card"}
            onClick={() => handleCardClick("features-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="web-projects-card-body">
              <Suspense
                fallback={<h4 className="web-projects-card-asset-loader">Loading video...</h4>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-asset-with-logo.mp4?alt=media&token=cf0b4218-1581-4944-b0a6-b5bf0df2bd99"
                  loop={true}
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  className={
                    fullScreenAsset === "shopping-card-asset"
                      ? "web-projects-card-img-open"
                      : "web-projects-card-img-close"
                  }
                  onClick={() => handleFullScreen("shopping-card-asset")}
                />
              </Suspense>
              <h2>Shopping Cart</h2>
              <i>22 April 2023</i>
              <p>
                This feature updates the shopping cart's total price based on user input quantity
                and removes items from the cart.
              </p>
              <h4>Technologies used 💡</h4>
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
              <h4>Skills 🧠</h4>
              <ul>
                <li>State management</li>
                <li>React component architecture</li>
                <li>User experience and interactivity</li>
                <li>Testing and debugging</li>
              </ul>
              <h4>Advantages 🦾</h4>
              <ul>
                <li>Improved user experience</li>
                <li>Easy integration</li>
                <li>Reusability</li>
                <li>Analytics</li>
              </ul>
              <h4>Difficulties ⚙️</h4>
              <ul>
                <li>State management and data flow</li>
                <li>Handle user input and form data </li>
                <li>Improve user experience with better organization of information</li>
                <li>Integratation with external APIs to retrieve and update product information</li>
              </ul>
              <div className="web-projects-card-CTA">
                <ButtonAnchor
                  href="https://kinxori.github.io/Shopping-cart-PRACTICE/"
                  target="_blank"
                >
                  Live Project
                </ButtonAnchor>
                <ButtonAnchor
                  href="https://github.com/kinxori/Shopping-cart-PRACTICE"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </ButtonAnchor>
              </div>
            </div>
            <hr></hr>
            <div className="web-projects-card-body">
              <Suspense
                fallback={<h4 className="web-projects-card-asset-loader">Loading video...</h4>}
              >
                <VideoLoader
                  className={
                    fullScreenAsset === "search-bar-asset"
                      ? "web-projects-card-img-open"
                      : "web-projects-card-img-close"
                  }
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/search-bar-asset-with-logo.mp4?alt=media&token=036c614d-e7b2-42eb-984d-9663e09c0e74"
                  loop={true}
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  onClick={() => handleFullScreen("search-bar-asset")}
                />
              </Suspense>
              <h2>Search Bar</h2>
              <i>9 March 2023</i>
              <p>
                This is a search bar component that filters and displays data in a table based on
                user input.
              </p>
              <h4>Technologies used 💡</h4>
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
              <h4>Skills 🧠</h4>
              <ul>
                <li>Filtering and searching data</li>
                <li>Componentization and modularity</li>
                <li>Handling events and state changes</li>
              </ul>
              <h4>Advantages 🦾</h4>
              <ul>
                <li>Allows users to easily search and filter large datasets</li>
                <li>Provides real-time search results as users type</li>
                <li>
                  Improves user experience by reducing the need to manually search and sort through
                  data
                </li>
              </ul>
              <h4>Difficulties ⚙️</h4>
              <ul>
                <li>Managing state</li>
                <li>Filtering logic</li>
                <li>Handling large datasets</li>
                <li>Accessibility</li>
              </ul>
              <div className="web-projects-card-CTA">
                <ButtonAnchor href="https://kinxori.github.io/react-practice-5/" target="_blank">
                  Live Project
                </ButtonAnchor>
                <ButtonAnchor
                  href="https://github.com/kinxori/react-practice-5"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </ButtonAnchor>
              </div>
            </div>
            <hr></hr>
            <div className="web-projects-card-body">
              <Suspense
                fallback={<h4 className="web-projects-card-asset-loader">Loading video...</h4>}
              >
                <VideoLoader
                  className={
                    fullScreenAsset === "fetch-api-asset"
                      ? "web-projects-card-img-open"
                      : "web-projects-card-img-close"
                  }
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-API-asset-with-logo.mp4?alt=media&token=42709b9f-dcf2-42d1-ab42-e78d8744a729"
                  loop={true}
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  onClick={() => handleFullScreen("fetch-api-asset")}
                />
              </Suspense>
              <h2>Fetch API</h2>
              <i>7 March 2023</i>
              <p>
                The code fetches data from the Rick & Morty API and displays characters'
                information. Clicking on a character's image shows their details.
              </p>
              <h4>Technologies used 💡</h4>
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
              <h4>Skills 🧠</h4>
              <ul>
                <li>Fetching data from APIs</li>
                <li>Event handling</li>
                <li>Conditional rendering</li>
                <li>Handling and displaying dynamic data</li>
              </ul>
              <h4>Advantages 🦾</h4>
              <ul>
                <li>Streamlined data manipulation</li>
                <li>Simplified data retrieval</li>
                <li>Improved data organization</li>
                <li>More effective information display</li>
              </ul>
              <h4>Difficulties ⚙️</h4>
              <ul>
                <li>Handling multiple states and data flow</li>
                <li>Managing complex user interactions and events</li>
                <li>Working with external APIs and handling response data</li>
                <li>Implementing efficient and performant rendering and updating of UI elements</li>
              </ul>
              <div className="web-projects-card-CTA">
                <ButtonAnchor
                  href="https://kinxori.github.io/FAQ-Component-PRACTICE/"
                  target="_blank"
                >
                  Live Project
                </ButtonAnchor>
                <ButtonAnchor
                  href="https://github.com/kinxori/FAQ-Component-PRACTICE"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </ButtonAnchor>
              </div>
            </div>
          </CardDisplay>
          <CardDisplay
            header={
              <>
                <i className="fa-solid fa-pager"></i>&nbsp;&nbsp;Apps
              </>
            }
            isActive={cardClicked === "web-projects-card"}
            onClick={() => handleCardClick("web-projects-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="web-projects-card-body">
              <Suspense
                fallback={<h4 className="web-projects-card-asset-loader">Loading video...</h4>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/media-music-player-asset-with-logo.mp4?alt=media&token=ade6f55d-0f5e-41df-b1ff-f91095bfd87e"
                  controls={true}
                  autoPlay={false}
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="web-projects-card-body-video"
                />
              </Suspense>
              <h2>Music Media Player</h2>
              <i>4 May 2023</i>
              <p>
                This music media player app built with React allows users to play, pause, and skip
                songs in a playlist. It provides controls for volume adjustment and offers features
                like shuffle and repeat modes. The app displays song information and updates the
                progress bar in real-time. Users can click on a song in the playlist to start
                playing it. Enjoy a simple and intuitive interface for managing and enjoying your
                music collection.
              </p>
              <h4>Technologies used 💡</h4>
              <ul>
                <li>
                  <i className="fa-brands fa-react"></i> React
                </li>
                <li>
                  <img src={typescriptLogo} alt="typescript logo on white - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typescript
                </li>
                <li>
                  <i className="fa-brands fa-html5"></i> HTML
                </li>
                <li>
                  <img src={tailwindLogo} alt="tailwindcss logo on white - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tailwind
                </li>
              </ul>
              <h4>Skills 🧠</h4>
              <ul>
                <li>State management</li>
                <li>UI Design and Styling</li>
                <li>User experience and interactivity</li>
                <li>Data Management</li>
                <li>Event Handling</li>
              </ul>
              <h4>Advantages 🦾</h4>
              <ul>
                <li>Enhanced User Experience</li>
                <li>Convenience and Accessibility</li>
                <li>Customization and Personalization</li>
                <li>Cross-Platform Compatibility</li>
                <li>Real-Time Updates and Feedback</li>
                <li>Integration with External Services</li>
                <li>Scalability</li>
              </ul>
              <h4>Difficulties ⚙️</h4>
              <ul>
                <li>Accessibility Considerations</li>
                <li>Testing and Quality Assurance</li>
                <li>Error Handling and Debugging</li>
                <li>Performance Optimization</li>
                <li>Audio Playback and Compatibility</li>
                <li>Integration with External APIs</li>
              </ul>
              <div className="web-projects-card-CTA">
                <ButtonAnchor
                  href="https://kinxori.github.io/Music-Media-Player-PRACTICE/"
                  target="_blank"
                >
                  Live Project
                </ButtonAnchor>
                <ButtonAnchor
                  href="https://github.com/kinxori/Music-Media-Player-PRACTICE"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </ButtonAnchor>
              </div>
            </div>
          </CardDisplay>
        </section>
      )}
    </article>
  );
}
