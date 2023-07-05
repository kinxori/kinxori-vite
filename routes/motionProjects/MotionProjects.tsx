import { useEffect, useState } from "react";
import "./_motionProjects.css";
import Button from "@components/Buttons/Button";
import DemoCard from "@components/DemoCard/DemoCard";
import mainMotionProjectsAsset from "@src/assets/motion-projects-asset.png";
import mrBureacucracy from "@src/assets/3D-works/ChincheTV_final_comp_PNG_v2.jpg";

export default function MotionProjects() {
  const [fullScreenAsset, setFullScreenAsset] = useState("");
  const [isLoadingVideo, setLoadingVideo] = useState(true);
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("StoredMotionProjects");
    return storedState ? storedState === "true" : false;
  });
  const [cardClicked, setCardClicked] = useState(() => {
    const storedState = localStorage.getItem("StoredCardClicked");
    return storedState || null;
  });

  useEffect(() => {
    localStorage.setItem("StoredMotionProjects", isActive.toString());
  }, [isActive]);

  useEffect(() => {
    if (cardClicked !== null) {
      localStorage.setItem("StoredCardClicked", cardClicked);
    }
  }, [cardClicked]);

  const handleFullScreen = (id: string) => {
    setFullScreenAsset((currenValue) => (currenValue !== id ? id : ""));
  };

  const handleCardClick = (id: string) => {
    setCardClicked((currentValue) => (currentValue !== id ? id : ""));
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
          <div className="motion-projects-CTA">
            <Button onClick={() => setIsActive(!isActive)} variant="secButton">
              {isActive === false ? "Open Projects" : "Close Projects"}
            </Button>
          </div>
        </div>
      </div>
      {isActive === true && (
        <section className="motion-projects-cards">
          {fullScreenAsset !== "" && (
            <>
              <Button
                className="motion-projects-full-screen-close-button"
                variant="linkButton"
                onClick={() => handleFullScreen("")}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </Button>
              <div
                className="motion-projects-full-screen-bg"
                onClick={() => handleFullScreen("")}
              ></div>
            </>
          )}
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-video"></i>&nbsp;&nbsp;Motion Design
              </>
            }
            isActive={cardClicked === "motion-desing-card"}
            onClick={() => handleCardClick("motion-desing-card")}
          >
            <div className="motion-projects-card-body">
              {/* <video
                src="https://drive.google.com/file/d/1JT4KKygKZwdIIhkQi3_MbUntbdlEfGyb/view?usp=sharing"
                onLoadedData={() => setLoadingVideo(false)}
                loop
                autoPlay
                controls={false}
                muted
                className={
                  fullScreenAsset === "shopping-card-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                onClick={() => handleFullScreen("shopping-card-asset")}
              ></video> */}
              <h2>Under construction ⚙️</h2>
              {/* <div className="motion-projects-card-CTA">
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
            isActive={cardClicked === "3d-modeling-card"}
            onClick={() => handleCardClick("3d-modeling-card")}
          >
            <div className="motion-projects-card-body">
              <img
                src={mrBureacucracy}
                className={
                  fullScreenAsset === "mrBureacucracy-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                onClick={() => handleFullScreen("mrBureacucracy-asset")}
              ></img>
              <h2>Mr. Bureaucracy</h2>
              <p>
                This character draws inspiration from Kingpin, a notable Spider-Man character. The
                project's core concept revolves around a short film that explores the notion of
                being governed by television. At the end of the day, the project was not fulfilled
                due to lack of time.
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
              {/* <div className="motion-projects-card-CTA">
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
        </section>
      )}
    </article>
  );
}
