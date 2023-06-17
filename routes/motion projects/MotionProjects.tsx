import { useEffect, useState } from "react";
import Button from "./../../components/Buttons/Button";
import DemoCard from "./../../components/DemoCard/DemoCard";
import "./_motionProjects.css";
import mainMotionProjectsAsset from "/src/assets/motion-projects-asset.png";

export default function MotionProjects() {
  const [isClicked, setIsClicked] = useState(() => {
    const storedState = localStorage.getItem("isClicked");
    return storedState || null;
  });
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("isProjectsMotionActive");
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
    localStorage.setItem("isProjectsMotionActive", isActive.toString());
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
    <article className="motion-projects-root">
      <div className="motion-projects-content">
        <img
          src={mainMotionProjectsAsset}
          alt="Purple bulb illustration with a melting like effect running - Kinxori Motion Design Projects Route"
        />
        <div className="motion-projects-copy">
          <h2>
            Check out some of my <b>motion design</b> projects in action! 🎬
          </h2>
          <p>
            As you may already know, I am a <b>motion designer</b> and became a
            <b> web developer </b> recently.
            <b> Check out</b> my work as a creative as well.
          </p>
          <Button
            onClick={handleProjectsButton}
            variant="secButton"
            className="motion-projects-CTA"
          >
            {isActive === false ? "Open Projects" : "Close Projects"}
          </Button>
        </div>
      </div>
      {isActive === true && (
        <section className="motion-projects-display-projects-cards">
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-video"></i>&nbsp;&nbsp;Motion Design
              </>
            }
            isActive={isClicked === "features-card"}
            onClick={() => handleCardClick("features-card")}
          >
            <div className="motion-projects-display-card">
              {/* <div
                className={
                  isFullScreen === "shopping-card-asset"
                    ? "motion-projects-full-screen-asset-open"
                    : "motion-projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("shopping-card-asset")}
              >
                <Button className="motion-projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && (
                  <h3 className="motion-projects-card-asset-loader">Loading video...</h3>
                )}
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/shopping-cart-functionality-video.mov?alt=media&token=324db9e4-dc38-4227-a574-a3a9080f2797"
                  onLoadedData={() => setIsLoadingVideo(false)}
                  loop
                  autoPlay
                  controls={false}
                  muted
                  className="motion-projects-display-card-asset"
                ></video>
                <div className="motion-projects-full-screen-bg"></div>
              </div> */}
              <h2>Under construction ⚙️</h2>

              {/* <div className="motion-projects-display-cards-CTA">
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
              </div> */}
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-cube"></i>&nbsp;&nbsp;3D Modeling
              </>
            }
            isActive={isClicked === "web-projects-card"}
            onClick={() => handleCardClick("web-projects-card")}
          >
            <div className="motion-projects-display-card">
              {/* <div
                className={
                  isFullScreen === "fetch-api-asset"
                    ? "motion-projects-full-screen-asset-open"
                    : "motion-projects-full-screen-asset-close"
                }
                onClick={() => handleFullScreen("fetch-api-asset")}
              >
                <Button className="motion-projects-full-screen-asset-button" variant="linkButton">
                  Close
                </Button>
                {isLoadingVideo && (
                  <h3 className="motion-projects-card-asset-loader">Loading video...</h3>
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
