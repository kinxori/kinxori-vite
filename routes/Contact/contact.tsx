import { useEffect, useState, useRef } from 'react'
import Button from '../../components/Buttons/Button'
import ButtonAnchor from '../../components/Buttons/ButtonAnchor'
import './_contact.css'
import InputForm from "../../components/Email-InputForm/InputForm"
import DemoCard from '../../components/DemoCard/DemoCard'

export default function Contact(){

    const imgAsset = "/404Assets.png"

    const [downloadUrl, setDownloadUrl] = useState(imgAsset);

    const downloadCV = async () => {
      try {
        const response = await fetch(
          `https://us-central1-myportfolio-70cb1.cloudfunctions.net/downloadFileFunction`,
          {
            mode: "no-cors"
          }
        );
    
        if (!response.ok) {
          throw new Error("Failed to download file");
        }
    
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
      } catch (error) {
        console.error(error);
      }
    };


    
    const [isClicked, setIsClicked] = useState(() => {
        const storedState = localStorage.getItem("isClicked");
        return storedState || null;
      });

    const [isActive, setisActive] = useState(() => {
        const storedState = localStorage.getItem("isActive");
        return storedState ? storedState === "true" : false;
      })
    
    useEffect(() => {
        if (isClicked !== null){
            localStorage.setItem("isClicked", isClicked);
        }
    }, [isClicked]);

    useEffect(() => {
        localStorage.setItem("isActive", isActive.toString())
    }, [isActive]);

    const handleCardClick = (id:any)=>{
        setIsClicked((currentValue : any) => currentValue !== id ? id : false)
    };

    const handleOptionsButton = ()=>{
        setisActive(!isActive)
    };
   



    return(
        <article className="contact-root">
            <div className="contact-content">
                <img src="./contact-asset.png" alt="contact-asset.png" />
                <div className='contact-copy'>
                    <h2><b>Hey there!</b> Thanks for stopping by ☕️ </h2>
                    <br/>
                    <p>
                        Let's chat about <b>web development</b> or <b>motion graphics,</b> or just connect as friends! <b>Send me a message</b> and let's grab a virtual coffee! 
                    </p>
                    <Button onClick={handleOptionsButton} variant="secButton" className="Contact-CTA">
                        {isActive === false ? "Open Options" : "Close Options"}
                    </Button>
                </div>
            </div>
            <div className='contact-btn-options'>
                {isActive === true &&
                    <section className='contact-options-cards'>
                        <DemoCard header={<> <i className="fa-regular fa-envelope"></i> Email</>} isActive={isClicked === "card1"} onClick={() => handleCardClick("card1")}>
                            <InputForm/>
                        </DemoCard>
                        <DemoCard header={<><i className="fa-brands fa-whatsapp"></i> What's App </>} isActive={isClicked === "card2"} onClick={() => handleCardClick("card2")}>
                            <h3>Click the button below to send me a What's App message.</h3>
                            <Button to="https://api.whatsapp.com/send/?phone=527713168861&text&type=phone_number&app_absent=0" target="_blank" variant="mainButton">
                                Send a What's App
                            </Button>
                        </DemoCard>
                        <DemoCard header={<><i className="fa-brands fa-twitter"></i> Twitter </>} isActive={isClicked === "card3"} onClick={() => handleCardClick("card3")}>
                            <h3>Follow me on Twitter and let's share thoughts!</h3>
                            <Button to="https://twitter.com/kinxori" target="_blank" variant="mainButton">
                                Go Twitter
                            </Button>
                        </DemoCard>
                        <DemoCard header={<><i className="fa-solid fa-download"></i> Resume </>} isActive={isClicked === "card4"} onClick={() => handleCardClick("card4")}>
                            <h3>Click the button below to download my lastes CV! 📜</h3>
                            <ButtonAnchor href={downloadUrl} download variant="mainButton">                            
                                    Download CV                                                  
                            </ButtonAnchor>
                        </DemoCard>
                    </section>
                }
            </div>
        </article>
    )
}