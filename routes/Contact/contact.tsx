import { useEffect, useState, lazy, Suspense } from 'react'
import Button from '../../components/Buttons/Button'
import './_contact.css'
// import InputForm from "../../components/InputForm/InputForm"
import DemoCard from '../../components/DemoCard/DemoCard'


export default function Contact(){
    
    const [isClicked, setIsClicked] = useState(null);
    const [isActive, setisActive] = useState(() => {
        const storedState = localStorage.getItem("isActive");
        return storedState ? storedState === "true" : false;
      })
    
    useEffect(() => {
        localStorage.setItem("isActive", isActive.toString())
    }, [isActive]);

    const handleClick = ()=>{
        setisActive(!isActive)
    };
    const handleCard = (id:any)=>{
        setIsClicked((currentValue : any) => currentValue !== id ? id : false)
    };

    const EmailInputForm = lazy(()=> import("../../components/Email-InputForm/InputForm"));

    return(
        <article className="contact-root">
            <div className="contact-content">
                <img src="./contact-asset.png" alt="contact-asset.png" />
                <div className='contact-copy'>
                    <h2><b>Hey there!</b> Thanks for stopping by ☕️ </h2>
                    <p>
                        Let's chat about <b>web development</b> or <b>motion graphics,</b> or just connect as friends! <b>Send me a message</b> and let's grab a virtual coffee! 
                    </p>
                </div>
            </div>
            <div className='contact-btn-options'>
                <Button onClick={handleClick} variant="secButton" className="Contact-CTA">
                    {isActive === false ? "Open Options" : "Close Options"}
                </Button>
                {isActive === true &&
                <Suspense fallback={<h2>Loading options...</h2>}>
                    <section className='contact-options-cards'>
                        <DemoCard header="Email 📧" isActive={isClicked === "card1"} onClick={() => handleCard("card1")}>
                            {isClicked === "card1" && <EmailInputForm/>}
                        </DemoCard>
                        <DemoCard header="What's App 📱" isActive={isClicked === "card2"} onClick={() => handleCard("card2")}>
                            <h3>Click the button below to send me a What's App message.</h3>
                            <Button to="https://api.whatsapp.com/send/?phone=527713168861&text&type=phone_number&app_absent=0" target="_blank" variant="mainButton">
                                Send a What's App
                            </Button>
                        </DemoCard>
                        <DemoCard header="Twitter 🐦" isActive={isClicked === "card3"} onClick={() => handleCard("card3")}>
                            <h3>Follow me on Twitter and let's share thoughts!</h3>
                            <Button to="https://twitter.com/kinxori" target="_blank" variant="mainButton">
                                Go Twitter
                            </Button>
                        </DemoCard>
                    </section>
                </Suspense>
                }
            </div>
        </article>
    )
}