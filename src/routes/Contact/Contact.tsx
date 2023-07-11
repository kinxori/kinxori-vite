import { useEffect, useState } from "react";
import "./_contact.css";
import Button from "@src/components/Buttons/Button";
import ButtonAnchor from "@src/components/Buttons/ButtonAnchor";
import InputForm from "@src/components/Email-InputForm/InputForm";
import DemoCard from "@src/components/DemoCard/DemoCard";
import contactAsset from "@src/assets/contactAsset.png";
import resumeFilePDF from "@src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";
import linkedinSS from "@src/assets/linkedin-profile-ss.png";
import resumeSS from "@src/assets/resume-ss.png";
import githubSS from "@src/assets/github-profile-ss.png";
import twitterSS from "@src/assets/twitter-profile-ss.png";
import emailAsset from "@src/assets/AboutmeAsset.png";

export default function Contact() {
  const [fullScreenAsset, setFullScreenAsset] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [isActive, setActive] = useState(() => {
    const storedState = localStorage.getItem("StoredOptionsButton");
    return storedState ? storedState === "true" : false;
  });

  const [cardClicked, setCardClicked] = useState(() => {
    const storedState = localStorage.getItem("CardClicked");
    return storedState || null;
  });

  useEffect(() => {
    localStorage.setItem("StoredOptionsButton", isActive.toString());
  }, [isActive]);

  useEffect(() => {
    if (cardClicked !== null) {
      localStorage.setItem("CardClicked", cardClicked);
    }
  }, [cardClicked]);

  const handleFullScreen = (id: string) => {
    setFullScreenAsset((currenValue) => (currenValue !== id ? id : ""));
  };

  const handleCardClick = (id: string) => {
    setCardClicked((currentValue) => (currentValue !== id ? id : ""));
  };

  const handlePopUp = (value: boolean) => {
    setPopUp(value);
  };

  return (
    <article className="contact-root">
      <div className="contact-content">
        <img
          src={contactAsset}
          className="contact-main-asset"
          alt="Purple mailbox receiving an email - Kinxori Contact Route"
        />
        <div className="contact-copy">
          <h2>
            <b>Hey there!</b> Thanks for stopping by ☕️
          </h2>
          <p>
            Let's chat about <b>web development</b> or <b>motion design,</b> or just connect as
            friends! <b>Send me a message</b> and let's grab a virtual coffee!
          </p>
          <div className="contact-CTA">
            <Button onClick={() => setActive(!isActive)} variant="secButton">
              {isActive === false ? "Open Options" : "Close Options"}
            </Button>
          </div>
        </div>
      </div>
      {isActive === true && (
        <section className="contact-cards">
          {fullScreenAsset !== "" && (
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
            isActive={cardClicked === "linkedin-card"}
            onClick={() => handleCardClick("linkedin-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="contact-card-body">
              <img
                className={
                  fullScreenAsset === "linkedin-card-img"
                    ? "contact-card-img-open"
                    : "contact-card-img-close"
                }
                onClick={() => handleFullScreen("linkedin-card-img")}
                src={linkedinSS}
                alt="screenshot of Kinxori's linkedin profile"
              ></img>
              <h4>Click the button below to visit my LinkedIn profile. Let's connect! 💻</h4>
              <Button
                to="https://www.linkedin.com/in/quinchori/"
                target="_blank"
                variant="mainButton"
                className="contact-card-body-CTA"
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
            isActive={cardClicked === "resume-card"}
            onClick={() => handleCardClick("resume-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="contact-card-body">
              <img
                className={
                  fullScreenAsset === "resume-card-img-asset"
                    ? "contact-card-img-open"
                    : "contact-card-img-close"
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
                className="contact-card-body-CTA"
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
            isActive={cardClicked === "github-card"}
            onClick={() => handleCardClick("github-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="contact-card-body">
              <img
                src={githubSS}
                alt="screenshot of Kinxori's github profile"
                className={
                  fullScreenAsset === "github-card-img-asset"
                    ? "contact-card-img-open"
                    : "contact-card-img-close"
                }
                onClick={() => handleFullScreen("github-card-img-asset")}
              ></img>
              <h4>Take a look at my Github! I'm sure you will find something of value 📖</h4>
              <Button
                to="https://github.com/kinxori"
                target="_blank"
                variant="mainButton"
                className="contact-card-body-CTA"
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
            isActive={cardClicked === "twitter-card"}
            onClick={() => handleCardClick("twitter-card")}
            fullScreen={fullScreenAsset !== "" && "fullScreen-active"}
          >
            <div className="contact-card-body">
              <img
                src={twitterSS}
                alt="screenshot of Kinxori's twitter profile"
                onClick={() => handleFullScreen("twitter-card-img-asset")}
                className={
                  fullScreenAsset === "twitter-card-img-asset"
                    ? "contact-card-img-open"
                    : "contact-card-img-close"
                }
              ></img>
              <h4>Follow me on Twitter and let's share thoughts! 🐦</h4>
              <Button
                to="https://twitter.com/intent/tweet?text=@kinxori%20Hi!%20I%20saw%20your%20webpage%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you!%20🤝"
                target="_blank"
                variant="mainButton"
                className="contact-card-body-CTA"
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
            isActive={cardClicked === "email-card"}
            onClick={() => handleCardClick("email-card")}
            fullScreen={popUp && "fullScreen-active"}
          >
            <div className="contact-card-body">
              <InputForm handlePopUp={handlePopUp} popUp={popUp} />
            </div>
          </DemoCard>
          {popUp === true && (
            <div className="email-pop-up-root">
              <div className="email-pop-up-content">
                <img
                  src={emailAsset}
                  alt="purple cup of coffee with a delivery backpack riding a scooter with glasses on its way to deliver something - Kinxori.com"
                ></img>
                <h2>Email sent! 👨‍💻</h2>
                <Button variant="mainButton" onClick={handlePopUp}>
                  Close
                </Button>
              </div>
              <div className="email-pop-up-background" onClick={() => setPopUp(false)}></div>
            </div>
          )}
        </section>
      )}
    </article>
  );
}
