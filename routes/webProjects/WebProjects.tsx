import { useEffect, useState, Suspense, lazy } from "react";
import "./_webProjects.css";
import Button from "@components/Buttons/Button";
import DemoCard from "@components/DemoCard/DemoCard";
import mainProjectsAsset from "@src/assets/projects-asset.png";
import typescriptLogo from "@src/assets/typescript-png-logo-500x500-white.png";
import tailwindLogo from "@src/assets/tailwindcss-png-logo-500x500-white.png";

const VideoLoader = lazy(() => import("@components/VideoLoader/VideoLoader"));

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
          <div className="projects-CTA">
            <Button onClick={() => setIsActive(!isActive)} variant="secButton">
              {isActive === false ? "Open Projects" : "Close Projects"}
            </Button>
          </div>
        </div>
      </div>
      {isActive === true && (
        <section className="projects-display-projects-cards">
          {fullScreenAsset !== "" && (
            <>
              <Button
                className="projects-full-screen-close-button"
                variant="linkButton"
                onClick={() => handleFullScreen("")}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </Button>
              <div className="projects-full-screen-bg" onClick={() => handleFullScreen("")}></div>
            </>
          )}
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;&nbsp;Features
              </>
            }
            isActive={cardClicked === "features-card"}
            onClick={() => handleCardClick("features-card")}
          >
            <div className="projects-display-card-body">
              <Suspense fallback={<h3 className="projects-card-asset-loader">Loading video...</h3>}>
                <VideoLoader
                  className={
                    fullScreenAsset === "shopping-card-asset"
                      ? "projects-full-screen-img-open"
                      : "projects-full-screen-img-close"
                  }
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-functionality-video.mov?alt=media&token=324db9e4-dc38-4227-a574-a3a9080f2797"
                  loop={true}
                  preload="auto"
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  onClick={() => handleFullScreen("shopping-card-asset")}
                />
              </Suspense>
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
              <div className="projects-display-card-CTA">
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
            <div className="projects-display-card-body">
              <Suspense fallback={<h3 className="projects-card-asset-loader">Loading video...</h3>}>
                <VideoLoader
                  className={
                    fullScreenAsset === "search-bar-asset"
                      ? "projects-full-screen-img-open"
                      : "projects-full-screen-img-close"
                  }
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/search%20bar%20edited.mov?alt=media&token=4cf3a15b-8a9d-4548-8590-9602af1d62d4"
                  loop={true}
                  preload="auto"
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  onClick={() => handleFullScreen("search-bar-asset")}
                />
              </Suspense>
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
              <div className="projects-display-card-CTA">
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
            <div className="projects-display-card-body">
              <Suspense fallback={<h3 className="projects-card-asset-loader">Loading video...</h3>}>
                <VideoLoader
                  className={
                    fullScreenAsset === "fetch-api-asset"
                      ? "projects-full-screen-img-open"
                      : "projects-full-screen-img-close"
                  }
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-api-edited.mov?alt=media&token=daa9385e-2ee5-492e-9d6f-42b8865a65eb"
                  loop={true}
                  preload="auto"
                  autoPlay={true}
                  controls={false}
                  muted={true}
                  onClick={() => handleFullScreen("fetch-api-asset")}
                />
              </Suspense>
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
              <div className="projects-display-card-CTA">
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
            isActive={cardClicked === "web-projects-card"}
            onClick={() => handleCardClick("web-projects-card")}
          >
            <div className="projects-display-card-body">
              <Suspense fallback={<h3 className="projects-card-asset-loader">Loading video...</h3>}>
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/MusicMediaPlayer.mp4?alt=media&token=555773ff-7e57-420a-903f-9bcee942ca63"
                  controls={true}
                  autoPlay={false}
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="projects-display-card-body-video"
                />
              </Suspense>
              <h2>Music Media Player</h2>
              <p>
                This music media player app built with React allows users to play, pause, and skip
                songs in a playlist. It provides controls for volume adjustment and offers features
                like shuffle and repeat modes. The app displays song information and updates the
                progress bar in real-time. Users can click on a song in the playlist to start
                playing it. Enjoy a simple and intuitive interface for managing and enjoying your
                music collection.
              </p>
              <h3>Technologies used 💡</h3>
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
              <h3>Skills 🧠</h3>
              <ul>
                <li>State management</li>
                <li>UI Design and Styling</li>
                <li>User experience and interactivity</li>
                <li>Data Management</li>
                <li>Event Handling</li>
              </ul>
              <h3>Advantages 🦾</h3>
              <ul>
                <li>Enhanced User Experience</li>
                <li>Convenience and Accessibility</li>
                <li>Customization and Personalization</li>
                <li>Cross-Platform Compatibility</li>
                <li>Real-Time Updates and Feedback</li>
                <li>Integration with External Services</li>
                <li>Scalability</li>
              </ul>
              <h3>Difficulties ⚙️</h3>
              <ul>
                <li>Accessibility Considerations</li>
                <li>Testing and Quality Assurance</li>
                <li>Error Handling and Debugging</li>
                <li>Performance Optimization</li>
                <li>Audio Playback and Compatibility</li>
                <li>Integration with External APIs</li>
              </ul>
              <div className="projects-display-card-CTA">
                <Button to="https://kinxori.github.io/react-media-player-practice/" target="_blank">
                  Live Project
                </Button>
                <Button
                  to="https://github.com/kinxori/react-media-player-practice/tree/master"
                  variant="secButton"
                  target="_blank"
                >
                  Github Repo
                </Button>
              </div>
              <hr></hr>
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
