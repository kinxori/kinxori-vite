import { useEffect, useState } from 'react'
import Button from '../../components/Buttons/Button'
import './_contact.css'
import InputForm from "../../components/InputForm/InputForm"
import DemoCard from '../../components/DemoCard/DemoCard'


export default function Contact(){
    
    const [isClicked, setIsClicked] = useState(false);

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
    const handleCard = ()=>{
        setIsClicked(!isClicked)
    };

    return(
        <article className="contact-root">
            <div className="contact-content">
                <img src="./contact-asset.png" alt="contact-asset.png" />
                <div className='contact-copy'>
                    <h2>Hey there! <b>Thanks</b> for stopping by 🤝 </h2>
                    <p>
                        Let's chat about <b>web dev</b> or <b>motion graphics,</b> or just connect as friends! <b>Send me a message</b> and let's grab a virtual coffee! 
                    </p>
                </div>
            </div>
            <div className='contact-btn-form'>
                <Button onClick={handleClick} variant="secButton">
                    {isActive === false ? "Open Options" : "Close Options"}
                </Button>
                {isActive === true && 
                <>
                    <DemoCard header="Email! 📧" isActive={isClicked} onClick={handleCard} >
                        <InputForm/>
                    </DemoCard>
                    <DemoCard header="What's App! 🖁" isActive={isClicked} onClick={handleCard} >
                        <p>HOla</p>
                    </DemoCard>
                    <DemoCard header="Twitter 🐦" isActive={isClicked} onClick={handleCard} >
                        <p>HOla</p>
                    </DemoCard>
                </>}
            </div>
        </article>
    )
}