import { useEffect, useState } from "react";
import "./_motionProjects.css";
import Button from "@components/Buttons/Button";
import DemoCard from "@components/DemoCard/DemoCard";
import mainMotionProjectsAsset from "@src/assets/motion-projects-asset.png";
import mrBureacucracy from "@src/assets/3D-works/ChincheTV_final_comp_PNG_v2.png";
import mayaLogo from "@src/assets/autodesk-maya-logo.png";
import arnoldRenderLogo from "@src/assets/arnold-renderer-logo.png";
import goldenKemonito from "@src/assets/3D-works/golden-kemonito-v2.png";
import huitziTemple from "@src/assets/3D-works/huitzi_render_comp_v2.png";
import magicalVoxelLogo from "@src/assets/magical-voxel-logo.png";
import gatoCalzon from "@src/assets/3D-works/gato-render-resize.png";
import zbrushLogo from "@src/assets/zbrush-logo.png";

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
                alt="Mr. Bureaucracy. 3D model created by Kinxori. This character draws inspiration from Kingpin, a notable Spider-Man character but with a TV displaying a bear instead of head, wearing a suit and posing with 1 fist closed. - Kinxori.com"
                onClick={() => handleFullScreen("mrBureacucracy-asset")}
              ></img>
              <h2>Mr. Bureaucracy</h2>
              <p>This character draws inspiration from Kingpin, a notable Spider-Man character.</p>
              <h3>Technologies used 💡</h3>
              <ul>
                <li>
                  <img src={mayaLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Maya
                </li>
                <li>
                  <img src={arnoldRenderLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Arnold Renderer
                </li>
              </ul>
              <p>
                The project's core concept revolves around a short film that explores the notion of
                being governed by television. At the end of the day, the project was not fulfilled
                due to lack of time.
              </p>
              <i>- 26 March 2021</i>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <img
                src={goldenKemonito}
                className={
                  fullScreenAsset === "golden-kemonito-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                alt="Golden Kemonito. 3D model created by Kinxori. A tribute to world famous Mexican wrestler, now converted into a golden statue. This character is wearing a blur fur suit, posing as if it was surfing, dark background with the iconic CMLL letters from the 'Comisión Mexicana de Lucha Libre' - kinxori.com "
                onClick={() => handleFullScreen("golden-kemonito-asset")}
              ></img>
              <h2>Golden Kemonito</h2>
              <p>A tribute to world famous Mexican wrestler, now converted into a golden statue.</p>
              <h3>Technologies used 💡</h3>
              <ul>
                <li>
                  <img src={mayaLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Maya
                </li>
                <li>
                  <img src={arnoldRenderLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Arnold Renderer
                </li>
              </ul>
              <p>
                This project pays tribute to Kemonito, the legendary Mexican wrestler, celebrating
                his iconic presence in the ring.
              </p>
              <i>- 4 March 2020</i>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <img
                src={huitziTemple}
                className={
                  fullScreenAsset === "golden-kemonito-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                alt="Golden Kemonito. 3D model created by Kinxori. A tribute to world famous Mexican wrestler, now converted into a golden statue. This character is wearing a blur fur suit, posing as if it was surfing, dark background with the iconic CMLL letters from the 'Comisión Mexicana de Lucha Libre' - kinxori.com "
                onClick={() => handleFullScreen("golden-kemonito-asset")}
              ></img>
              <h2>Templo de Huitzilopochtli</h2>
              <p>
                This project showcases a 3D voxel model depicting the imagined interior of the
                Huitzilopochtli temple, offering a visual representation of its possible structure
                and design.
              </p>
              <h3>Technologies used 💡</h3>
              <ul>
                <li>
                  <img src={magicalVoxelLogo} alt="magical Voxel Logo - kinxori.com " />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magical Voxel
                </li>
                <li>
                  <img src={mayaLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Maya
                </li>
                <li>
                  <img src={arnoldRenderLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Arnold Renderer
                </li>
              </ul>
              <p>
                This project was specifically developed for a short film competition hosted by
                Shorts Mexico. It aims to faithfully recreate the interior of the Huitzilopochtli
                temple.
              </p>
              <i>- 5 February 2020</i>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <img
                src={gatoCalzon}
                className={
                  fullScreenAsset === "orange-cat-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                alt="Orange Cat. 3D model created by Kinxori.  This personal project embodies the concept of envisioning a more humane version of a
                cat. It portrays orange cats as irresistibly lazy, delightfully irrational, and
                funny personality. It celebrates the uniqueness and charm of orange cats while
                playfully acknowledging the humorous assumptions often made about them. - kinxori.com "
                onClick={() => handleFullScreen("orange-cat-asset")}
              ></img>
              <h2>Orange Cat</h2>
              <p>How would an orange cat would look like if it was more humane?</p>
              <h3>Technologies used 💡</h3>
              <ul>
                <li>
                  <img src={mayaLogo} alt="autodesk maya logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Maya
                </li>
                <li>
                  <img src={arnoldRenderLogo} alt="Arnold Renderer Logo - kinxori.com " />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arnold Renderer
                </li>
                <li>
                  <img src={zbrushLogo} alt="zBrush logo - kinxor.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zBrush
                </li>
              </ul>
              <p>
                This personal project embodies the concept of envisioning a more humane version of a
                cat. It portrays orange cats as irresistibly lazy, delightfully irrational, and
                funny personality. It celebrates the uniqueness and charm of orange cats while
                playfully acknowledging the humorous assumptions often made about them.
              </p>
              <i>- 12 October 2019</i>
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
