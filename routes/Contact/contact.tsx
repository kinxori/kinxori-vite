import { useEffect, useState } from "react";
import Button from "./../../components/Buttons/Button";
import ButtonAnchor from "./../../components/Buttons/ButtonAnchor";
import InputForm from "./../../components/Email-InputForm/InputForm";
import DemoCard from "./../../components/DemoCard/DemoCard";
import "./_contact.css";
import contactAsset from "/src/assets/contactAsset.png";
import resumeFilePDF from "/src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";
import linkedinSS from "./../../src/assets/linkedin-profile-ss.png";
import resumeSS from "./../../src/assets/resume-ss.png";
import githubSS from "./../../src/assets/github-profile-ss.png";
import twitterSS from "./../../src/assets/twitter-profile-ss.png";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(() => {
    const storedState = localStorage.getItem("isClicked");
    return storedState || null;
  });

  const [isActive, setisActive] = useState(() => {
    const storedState = localStorage.getItem("isOptionsButtonActive");
    return storedState ? storedState === "true" : false;
  });

  const [isFullScreen, setIsFullScreen] = useState("");

  const handleFullScreen = (id: any) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  useEffect(() => {
    if (isClicked !== null) {
      localStorage.setItem("isClicked", isClicked);
    }
  }, [isClicked]);

  useEffect(() => {
    localStorage.setItem("isOptionsButtonActive", isActive.toString());
  }, [isActive]);

  const handleCardClick = (id: any) => {
    setIsClicked((currentValue: any) => (currentValue !== id ? id : false));
  };

  const handleOptionsButton = () => {
    setisActive(!isActive);
  };

  return (
    <article className="contact-root">
      <div className="contact-content">
        <img src={contactAsset} alt="Purple mailbox receiving an email - Kinxori Contact Route" />
        <div className="contact-copy">
          <h2>
            <b>Hey there!</b> Thanks for stopping by ☕️
          </h2>
          <p>
            Let's chat about <b>web development</b> or <b>motion design,</b> or just connect as
            friends! <b>Send me a message</b> and let's grab a virtual coffee!
          </p>
          <div className="contact-CTA">
            <Button onClick={handleOptionsButton} variant="secButton">
              {isActive === false ? "Open Options" : "Close Options"}
            </Button>
          </div>
        </div>
      </div>
      {isActive === true && (
        <section className="contact-options-cards">
          {isFullScreen !== "" && (
            <>
              <Button
                className="contact-full-screen-close-button"
                variant="linkButton"
                onClick={() => handleFullScreen("")}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </Button>
              <div className="contact-full-screen-bg" onClick={() => handleFullScreen("")}></div>
            </>
          )}
          <DemoCard
            header={
              <>
                <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;LinkedIn
              </>
            }
            isActive={isClicked === "linkedin-card"}
            onClick={() => handleCardClick("linkedin-card")}
          >
            <div className="contact-display-card">
              <img
                className={
                  isFullScreen === "linkedin-card-img"
                    ? "contact-full-screen-img-open"
                    : "contact-full-screen-img-close"
                }
                onClick={() => handleFullScreen("linkedin-card-img")}
                src={linkedinSS}
                alt="screenshot of Kinxori's linkedin profile"
              ></img>
              <h4>Click the button below to visit my LinkedIn profile! 💻</h4>
              <Button
                to="https://www.linkedin.com/in/quinchori/"
                target="_blank"
                variant="mainButton"
                className="contact-display-card-CTA"
              >
                Go LinkedIn
              </Button>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-solid fa-download"></i>&nbsp;&nbsp;Resume/CV
              </>
            }
            isActive={isClicked === "resume-card"}
            onClick={() => handleCardClick("resume-card")}
          >
            <div className="contact-display-card">
              <img
                className={
                  isFullScreen === "resume-card-img-asset"
                    ? "contact-full-screen-img-open"
                    : "contact-full-screen-img-close"
                }
                onClick={() => handleFullScreen("resume-card-img-asset")}
                src={resumeSS}
                alt="screenshot of Kinxori's latest resume"
              ></img>
              <h4>Click the button below to download my latest resume! 📜</h4>
              <ButtonAnchor
                href={resumeFilePDF}
                download
                variant="mainButton"
                className="contact-display-card-CTA"
              >
                Download Resume
              </ButtonAnchor>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-brands fa-github"></i>&nbsp;&nbsp;Github
              </>
            }
            isActive={isClicked === "github-card"}
            onClick={() => handleCardClick("github-card")}
          >
            <div className="contact-display-card">
              <img
                src={githubSS}
                alt="screenshot of Kinxori's github profile"
                className={
                  isFullScreen === "github-card-img-asset"
                    ? "contact-full-screen-img-open"
                    : "contact-full-screen-img-close"
                }
                onClick={() => handleFullScreen("github-card-img-asset")}
              ></img>
              <h4>Take a look at my github! I'm sure you will find something of value 📖</h4>
              <Button
                to="https://github.com/kinxori"
                target="_blank"
                variant="mainButton"
                className="contact-display-card-CTA"
              >
                Go Github
              </Button>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;Twitter
              </>
            }
            isActive={isClicked === "twitter-card"}
            onClick={() => handleCardClick("twitter-card")}
          >
            <div className="contact-display-card">
              <img
                src={twitterSS}
                alt="screenshot of Kinxori's twitter profile"
                onClick={() => handleFullScreen("twitter-card-img-asset")}
                className={
                  isFullScreen === "twitter-card-img-asset"
                    ? "contact-full-screen-img-open"
                    : "contact-full-screen-img-close"
                }
              ></img>
              <h4>Follow me on Twitter and let's share thoughts! 🐦</h4>
              <Button
                to="https://twitter.com/intent/tweet?text=@kinxori%20Hi!%20I%20saw%20your%20webpage%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you!%20🤝"
                target="_blank"
                variant="mainButton"
                className="contact-display-card-CTA"
              >
                Go Twitter
              </Button>
            </div>
          </DemoCard>
          <DemoCard
            header={
              <>
                <i className="fa-regular fa-envelope"></i>&nbsp;&nbsp;Send email
              </>
            }
            isActive={isClicked === "email-card"}
            onClick={() => handleCardClick("email-card")}
          >
            <div className="contact-display-card">
              <InputForm />
            </div>
          </DemoCard>
        </section>
      )}
    </article>
  );
}
