import { useEffect, useState, lazy, Suspense } from "react";
import "./_motionProjects.css";
import Button from "@components/Buttons/Button";
import DemoCard from "@components/DemoCard/DemoCard";
import mainMotionProjectsAsset from "@src/assets/motion-projects-asset.png";
import mrBureacucracy from "@src/assets/3D-works/ChincheTV_final_comp_PNG_v2.png";
import mayaLogo from "@src/assets/Logos/autodesk-maya-logo.png";
import arnoldRenderLogo from "@src/assets/Logos/arnold-renderer-logo.png";
import goldenKemonito from "@src/assets/3D-works/golden-kemonito-v2.png";
import huitziTemple from "@src/assets/3D-works/huitzi_render_comp_v2.png";
import magicalVoxelLogo from "@src/assets/Logos/magical-voxel-logo.png";
import gatoCalzon from "@src/assets/3D-works/gato-render-resize.png";
import zbrushLogo from "@src/assets/Logos/zbrush-logo.png";
import afterEffectsLogo from "@src/assets/Logos/Adobe_After_Effects_CC_icon.png";

const VideoLoader = lazy(() => import("@components/VideoLoader/VideoLoader"));

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
              <Suspense
                fallback={<h3 className="motion-projects-card-asset-loader">Loading video...</h3>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/BEEZY%20BEEZ%20-%20ANIMATION%20ADS%20-%20CONCEPT%202_version2.mp4?alt=media&token=ab532dc9-c4bb-4bc5-9b0c-4e39b117159a"
                  controls={true}
                  autoPlay={false}
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="motion-projects-card-body-video"
                />
              </Suspense>
              <h2>Beezy Beez</h2>
              <i>5 December 2021</i>
              <p>
                Introducing Beezy Beez's Dog Biscuits, the perfect healthy treat for your furry
                companions. Packed with goodness and crafted with care, these biscuits provide a
                nutritious and tasty snack that dogs love. Give your pets the best with Beezy Beez.
              </p>
              <h3>Technologies 💡</h3>
              <ul>
                <li>
                  <img src={afterEffectsLogo} alt="After Effects logo - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After Effects
                </li>
              </ul>
              <h3>Story 📖</h3>
              <p>
                For this project, I had the opportunity to create a captivating video AD for Beezy
                Beez. Following the brand's guidelines and utilizing their assets, I brought their
                vision to life using After Effects. I sourced high-quality stock assets from trusted
                royalty-free websites to enhance the visual appeal of the AD. It was a rewarding
                experience to showcase the brand's product in a compelling and engaging way.
              </p>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <Suspense
                fallback={<h3 className="motion-projects-card-asset-loader">Loading video...</h3>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/Apricoat_Round38_Video2.mp4?alt=media&token=da9a7ae6-e071-49df-92f7-79bdaed0fe84"
                  controls={true}
                  autoPlay={false}
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="motion-projects-card-body-video"
                />
              </Suspense>
              <h2>Apricoat</h2>
              <i>26 May 2022</i>
              <p>
                Discover Aprociat, the ultimate destination for adventure-ready clothing. From
                jackets designed to withstand the toughest conditions to stylish jeans perfect for
                everyday wear, Aprociat offers a range of products that blend durability and
                fashion.
              </p>
              <h3>Technologies 💡</h3>
              <ul>
                <li>
                  <img src={afterEffectsLogo} alt="After Effects logo - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After Effects
                </li>
              </ul>
              <h3>Story 📖</h3>
              <p>
                In this project, I had the exciting task of transforming the written concept for
                Aprociat's commercial into a visually captivating AD. Working closely with the
                provided script, I brought the brand's vision to life through compelling visuals and
                engaging storytelling. By leveraging my skills in video production and editing, I
                created a dynamic AD that showcased the versatility and style of Aprociat's clothing
                line.
              </p>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <Suspense
                fallback={<h3 className="motion-projects-card-asset-loader">Loading video...</h3>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/BodyRestore_Round31_concept_27.mp4?alt=media&token=b597b3a1-90b3-48fc-aaae-65418596666e"
                  controls={true}
                  autoPlay={false}
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="motion-projects-card-body-video"
                />
              </Suspense>
              <h2>Body Restore</h2>
              <i>11 February 2022</i>
              <p>
                The Shower Steamers by Body Restore offer a delightful addition to your shower
                routine. Infused with soothing essential oils, these convenient companions release
                aromatic scents when exposed to water, creating a spa-like experience in the comfort
                of your own bathroom.
              </p>
              <h3>Technologies 💡</h3>
              <ul>
                <li>
                  <img src={afterEffectsLogo} alt="After Effects logo - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After Effects
                </li>
              </ul>
              <h3>Story 📖</h3>
              <p>
                For this project, following the brand's guidelines and using their provided assets,
                I crafted an enchanting visual experience that showcased the product's benefits.
                Using After Effects, I brought the script to life with seamless transitions,
                captivating visuals, and a captivating soundtrack. The result is an engaging AD that
                effectively communicates the essence of Body Restore's Shower Steamers, inviting
                viewers to indulge in a moment of relaxation and self-care.
              </p>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <Suspense
                fallback={<h3 className="motion-projects-card-asset-loader">Loading video...</h3>}
              >
                <VideoLoader
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/Task_3_Pocket_charger_WithSound_MASTER_V2.mp4?alt=media&token=a998af4c-5410-47f5-b995-ddca7a2a0c70"
                  controls={true}
                  autoPlay={false}
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="motion-projects-card-body-video"
                />
              </Suspense>
              <h2>Pocket Charger</h2>
              <i>12 May 2021</i>
              <p>
                The Pocket Charger is a compact and portable battery that provides additional power
                for your smartphone wherever you go. With its sleek design and convenience, it
                ensures that you never run out of battery while staying connected. Simply plug in
                your device and enjoy extended usage time on the move.
              </p>
              <h3>Technologies 💡</h3>
              <ul>
                <li>
                  <img src={afterEffectsLogo} alt="After Effects logo - kinxori.com"></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After Effects
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
              <h3>Story 📖</h3>
              <p>
                This project was a creative endeavor for Hoski Media, showcasing my animation skills
                and expertise. Tasked with following the provided script, I brought the concept of
                the Pocket Charger to life through a combination of Autodesk Maya and After Effects.
                From crafting custom assets to meticulously composing and editing the final
                animation, I aimed to capture the essence of the product's functionality and
                versatility.
              </p>
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
              <i>26 March 2021</i>
              <p>
                This character draws inspiration from Kingpin, a notable Spider-Man: Into the
                Spider-Verse cartoon-ish art style. Mr. Bureaucracy is an agent from the goverment
                that doesn't want people to know the truth in its own diegetic universe.
              </p>
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
              <h3>Story 📖</h3>
              <p>
                The project's core concept revolves around a short film that explores the notion of
                being governed by television. At the end of the day, the project was not fulfilled
                due to lack of time.
              </p>
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
              <i>4 March 2020</i>
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
              <h3>Story 📖</h3>
              <p>
                This project pays tribute to Kemonito, the legendary Mexican wrestler, celebrating
                his iconic presence in the ring.
              </p>
            </div>
            <hr></hr>
            <div className="motion-projects-card-body">
              <img
                src={huitziTemple}
                className={
                  fullScreenAsset === "huitzi-asset"
                    ? "motion-projects-full-screen-img-open"
                    : "motion-projects-full-screen-img-close"
                }
                alt="Templo de Huitzilopochtli. 3D Voxel model created by Kinxori. This project showcases a 3D voxel model depicting the imagined interior of the
                Huitzilopochtli temple, offering a visual representation of its possible structure
                and design. - kinxori.com "
                onClick={() => handleFullScreen("huitzi-asset")}
              ></img>
              <h2>Templo de Huitzilopochtli</h2>
              <i>5 February 2020</i>
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
              <h3>Story 📖</h3>
              <p>
                This project was specifically developed for a short film competition hosted by
                Shorts Mexico. It aims to faithfully recreate the interior of the Huitzilopochtli
                temple.
              </p>
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
              <i>12 October 2019</i>
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
              <h3>Story 📖</h3>
              <p>
                This personal project embodies the concept of envisioning a more humane version of a
                cat. It portrays orange cats as irresistibly lazy, delightfully irrational, and
                funny personality. It celebrates the uniqueness and charm of orange cats while
                playfully acknowledging the humorous assumptions often made about them.
              </p>
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
