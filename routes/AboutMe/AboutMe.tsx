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
                <div className="aboutme-copy-PFP">
                    <img src="/273048005_1274448366400567_4493743372539204487_n.jpg" alt="gustavo quiroz"></img>
                </div>
                <h3>
                    Where I come from? 🌎
                </h3>
                <br/>
                <p>
                    Born in 1998, I come from a small town near the central region of Mexico. 
                    Despite its size, the town has a rich cultural heritage, with vibrant music and dance traditions, colorful festivals, and delicious local cuisine.
                    Growing up there has taught me the value of community, hard work, and creativity, which I carry with me wherever I go.
                </p>
                <br/>
                <h3>
                    Personality? 💆
                </h3>
                <br/>
                <p>
                    I'm a person who enjoys a balanced lifestyle. While I'm not necessarily introverted, I prefer to spend my time at home. 
                    I find peace and serenity in my surroundings and like to make the most of it. 
                    However, that doesn't mean I don't like going out. I enjoy having dinner with friends and engaging in deep conversations. 
                    When I'm not socializing, I like to study and listen to music. I strive to live a meaningful life, 
                    and I'm always looking for ways to improve myself and my surroundings.
                </p>
                <br/>
                <h3>
                    Hobbies? 🍿
                </h3>
                <br/>
                <p>
                    In my free time, I love to stay active and be outdoors. 
                    Biking is one of my favorite activities, and I also enjoy going to the beach and spending time in nature. 
                    When I'm not outside, I enjoy exploring my creative side through music and craftsmanship. 
                    I play guitar and am interested in learning the violin and saxophone. 
                    I'm also interested in investing and learning about the stock market. 
                    Overall, I'm someone who likes to keep things chill and enjoy life's simple pleasures.                
                </p>
                <br/>
                <h3>
                    Aspirations? ⏳
                </h3>
                <br/>
                <p>
                    My main aspiration in life is to achieve financial freedom, not just for myself, but also to share a comfortable life with my loved ones. 
                    I believe that personal growth is important, and I am always eager to learn new things and gain knowledge to help me reach my goals. 
                    One of my passions is exploring new places and experiencing different cultures, 
                    which is why I aspire to live a fulfilling life where I can travel and create unforgettable memories with those closest to me. 
                    Ultimately, what I strive for is a peaceful and fulfilling life, 
                    where I can enjoy the simple things in life and cherish the moments spent with the people who matter most to me.                
                </p>
            </div>
            }
        </article>
    )
}