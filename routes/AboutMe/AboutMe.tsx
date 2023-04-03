import { useState } from "react";
import Button from "../../components/Buttons/Button";
import "./_aboutMe.css"

export default function AboutMe(){

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    
    return(
        <article className="aboutMe-root">
            <div className="aboutMe-content">
                <img src="/AboutmeAsset.png" alt="about me asset" />
                <h2>
                    About me
                </h2>
                <div className="ab-div">
                    <div className="aboutMe-copy">
                        <p className={isOpen === false ? "copyIsClose" : "copyIsOpen"} >
                            I'm Gustavo Quiroz, a <b>front-end</b> web developer with a passion for creating things. 
                            <br/>
                            Before becoming a web developer, I worked in <b>motion graphics</b> but wanted a more challenging career. 
                            <br/>
                            As a web developer, I get to combine my love for <b>creating</b> with my passion for <b>problem-solving.</b> 
                            <br/>
                            Feel free to explore <b>my portfolio</b> and reach out by clicking the button below to <b>connect</b> with me. 
                        </p> 
                        <Button variant="linkButton" className="aboutMe-readMore" onClick={handleClick}>{isOpen? "read less" : "read more"}</Button>
                    </div>
                    <Button className="aboutMe-CTA" variant="secButton" to="/contact">
                        Go contact
                    </Button>
                </div>
            </div>
        </article>
    )
}