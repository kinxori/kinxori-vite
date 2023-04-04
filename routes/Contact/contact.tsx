import { useState } from 'react'
import Button from '../../components/Buttons/Button'
import './_contact.css'

export default function Contact(){
    
    const [isActive, setIsActive] = useState(false)
    const handleClick = ( )=>{
        setIsActive(!isActive)
    }

    return(
        <article className="contact-root">
            <div className="contact-content">
                <img src="./contact-asset.png" alt="contact-asset.png" />
                <div className='contact-btn-form'>
                    <Button onClick={handleClick} variant="secButton">
                        {isActive === false ? "Open Form" : "Close Form"}
                    </Button>
                    {isActive === false ?
                    <div className='contact-copy'>
                        <h2>Hey there! Thanks for stopping by 🤝 </h2>
                        <p>
                            Let's chat about <b>web dev</b> or <b>motion graphics,</b> or just connect as friends! <b>Send me a message</b> and let's grab a virtual coffee! 
                        </p>
                    </div>
                    :
                    <iframe className="contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfCxMZviCUWi-YaxLzbgRNyV6vpYuAUkSTAKlKXU6LBbDAC_g/viewform?embedded=true">
                        Loading…
                    </iframe>
                    }               
                </div>
            </div>
        </article>
    )
}