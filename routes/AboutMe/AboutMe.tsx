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
                <div className="aboutMe-copy">
                    <h2>
                        But... <b>Who am I?</b> 🤪
                    </h2>
                    <br/>
                    <p>
                        My name is Gustavo Quiroz, <b>front-end web developer</b> with a passion for creating things. Formerly in <b>motion graphics,</b> now using my love for creating to <b>solve problems.</b>
                    </p>
                    <Button className="aboutMe-CTA" variant="secButton" onClick={handleClick}>
                        {isOpen? "Read less" : "Read more"}
                    </Button>            
                </div>
            </div>
            {isOpen === true && 
            <div className="about-me-read-more-content">
                <h3>
                    Where I come from? 
                </h3>
                <br/>
                <p>
                    Born in 1998 in Mexico and still living in Mexico. I have in mind to travel and create my own opportunity to live in different places around the globe. 
                </p>
                <h3>
                    Personality? 
                </h3>
                <br/>
                <p>
                    
                </p>
                <h3>
                    Hobbies? 
                </h3>
                <br/>
                <p>
                    I have plently of hobbies, most of them require me to go out home. I really like to spend time with my friends. I enjoy listening to music and playing to music aswell. I play the guitar, and  willing to learn violin and saxophone.
                </p>
                <p>
                    I have plently of hobbies. 
                </p>
                <h3>
                    Hobbies? 
                </h3>
                <br/>
                <p>
                    I have plently of hobbies, most of them require me to go out home. I really like to spend time with my friends. I enjoy listening to music and playing to music aswell. I play the guitar, and  willing to learn violin and saxophone.
                </p>
                <div className="aboutme-copy-PFP">
                    <img src="/273048005_1274448366400567_4493743372539204487_n.jpg" alt="gustavo quiroz"></img>
                </div>
            </div>
            }
        </article>
    )
}