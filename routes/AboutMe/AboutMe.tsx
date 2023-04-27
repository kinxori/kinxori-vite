import { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import "./_aboutMe.css"

export default function AboutMe(){

    const [isOpen, setisOpen] = useState(() => {
        const storedState = localStorage.getItem("isOpen");
        return storedState ? storedState === "true" : false;
      })
    
    useEffect(() => {
        localStorage.setItem("isOpen", isOpen.toString())
    }, [isOpen]);

    const handleClick = ( )=>{
        setisOpen(!isOpen)
    }
    
    return(
        <article className="aboutMe-root">
            <div className="aboutMe-content">
                <img src="/AboutmeAsset.png" alt="about me asset" className="about-me-asset"/>
                <div className="aboutMe-body">
                    <h2>
                        But... <b>Who am I?</b> 🤪
                    </h2>
                    <br/>
                    <div className="aboutMe-copy">
                         <span className={isOpen === false ? "copyIsClose" : "copyIsOpen"} onClick={handleClick}>
                            <p>
                                Hi! I am Gustavo Quiroz, a <b>front-end</b> web developer with a passion for creating things. 
                                <br/>
                                Before becoming a web developer, I worked in <b>motion graphics</b> but wanted a more challenging career. 
                                <br/>
                                As a web developer, I get to combine my love for <b>creating</b> with my passion for <b>problem-solving.</b> 
                                <br/>
                                Feel free to explore <b>my portfolio</b> and reach out by clicking the button below to <b>connect</b> with me.
                            </p>
                            <div className="aboutme-copy-PFP">
                                <img src="/273048005_1274448366400567_4493743372539204487_n.jpg" alt="gustavo quiroz"></img>
                            </div>
                            <div className="contact-copy-blur"></div>
                         </span> 
                        <Button variant="linkButton" className="aboutMe-readMore" onClick={handleClick}>{isOpen? "...read less" : "...read more"}</Button>
                    </div>
                </div>
            </div>
            <Button className="aboutMe-CTA" variant="secButton" to="/contact">
                Go contact
            </Button>
        </article>
    )
}