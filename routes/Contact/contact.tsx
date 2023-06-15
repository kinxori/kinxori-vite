import { useEffect, useState } from "react";
import Button from "./../../components/Buttons/Button";
import ButtonAnchor from "./../../components/Buttons/ButtonAnchor";
import InputForm from "./../../components/Email-InputForm/InputForm";
import DemoCard from "./../../components/DemoCard/DemoCard";
import resumeFilePDF from "./../../src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";
import mainContactAsset from "./../../src/assets/contact-asset.png";
import "./_contact.css";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(() => {
    const storedState = localStorage.getItem("isClicked");
    return storedState || null;
  });

  const [isActive, setisActive] = useState(() => {
    const storedState = localStorage.getItem("isOptionsButtonActive");
    return storedState ? storedState === "true" : false;
  });

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
        <img
          src={mainContactAsset}
          alt="Purple mailbox receiving an email - Kinxori Contact Route"
        />
        <div className="contact-copy">
          <h2>
            <b>Hey there!</b> Thanks for stopping by ☕️
          </h2>
          <p>
            Let's chat about <b>web development</b> or <b>motion graphics,</b> or just connect as
            friends! <b>Send me a message</b> and let's grab a virtual coffee!
          </p>
          <Button onClick={handleOptionsButton} variant="secButton" className="contact-CTA">
            {isActive === false ? "Open Options" : "Close Options"}
          </Button>
        </div>
      </div>
      {isActive === true && (
        <section className="contact-options-cards">
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
              <h3>Click the button below to visit my LinkedIn profile! 🧳</h3>
              <Button
                to="https://api.whatsapp.com/send/?phone=527713168861&text&type=phone_number&app_absent=0"
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
                <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;Twitter
              </>
            }
            isActive={isClicked === "twitter-card"}
            onClick={() => handleCardClick("twitter-card")}
          >
            <div className="contact-display-card">
              <h3>Follow me on Twitter and let's share thoughts! 🐦</h3>
              <Button
                to="https://twitter.com/intent/tweet?text=@kinxro%20Hi!%20I%20saw%20your%20webpage%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you!%20🤝"
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
                <i className="fa-solid fa-download"></i>&nbsp;&nbsp;Resume/CV
              </>
            }
            isActive={isClicked === "resume-card"}
            onClick={() => handleCardClick("resume-card")}
          >
            <div className="contact-display-card">
              <h3>Click the button below to download my latest resume! 📜</h3>
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
        </section>
      )}
    </article>
  );
}
