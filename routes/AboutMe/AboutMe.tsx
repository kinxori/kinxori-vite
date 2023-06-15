import { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import mainAboutMeAsset from "./../../assets/AboutmeAsset.png";
import "./_aboutMe.css";

export default function AboutMe() {
  const [isOpen, setisOpen] = useState(() => {
    const storedState = localStorage.getItem("isReadMore");
    return storedState ? storedState === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("isReadMore", isOpen.toString());
  }, [isOpen]);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <article className="aboutMe-root">
      <div className="aboutMe-content">
        <img src={mainAboutMeAsset} alt="about me asset" className="about-me-asset" />
        <div className="aboutMe-copy">
          <h2>
            But... <b>Who is Kinxori?</b> 🤪
          </h2>

          <p>
            My name is Gustavo Quiroz, <b>front-end web developer</b> with a passion for creating
            things. Formerly in <b>motion graphics,</b> now using my love for creating to{" "}
            <b>solve problems.</b>
          </p>
          <Button className="aboutMe-CTA" variant="secButton" onClick={handleClick}>
            {isOpen ? "Read less" : "Read more"}
          </Button>
        </div>
      </div>
      {isOpen === true && (
        <div className="about-me-read-more-content">
          <div className="aboutme-copy-PFP">
            <img
              src="/273048005_1274448366400567_4493743372539204487_n.jpg"
              alt="Gustavo Quiroz - Kinxori"
            ></img>
          </div>
          <h3>Where do I come from? 🌎</h3>
          <p>
            Born in 1998, I come from a small town near the central region of Mexico. Despite its
            size, the town has a rich cultural heritage, with vibrant music and dance traditions,
            colorful festivals, and delicious local cuisine. Growing up there has taught me the
            value of community, hard work, and creativity, which I carry with me wherever I go.
          </p>
          <h3>Personality? 💆</h3>
          <p>
            I'm a person who enjoys a balanced lifestyle. While I'm not necessarily extroverted, I
            enjoy my time at home. I find peace and serenity in my surroundings and like to make the
            most of it. However, that doesn't mean I don't like going out. I enjoy having dinner
            with friends and engaging in deep conversations. When I'm not socializing, I like to
            study and listen to music. I strive to live a meaningful life, and I'm always looking
            for ways to improve myself and my surroundings.
          </p>
          <h3>Career? 👨‍🎓</h3>
          <p>
            Throughout my career path, I have pursued my passion for creativity and visual arts.
            After graduating with a degree in Animation and Visual Effects in 2020, I landed a job
            as a 2D Cut-Out Animator and Background Illustrator from 2020-2021. This was just the
            start of my journey, as I eventually progressed to become a Lead Motion Graphic Artist
            in a Canadian marketing agency in mid-2021.
          </p>
          <p>
            Although I had a successful career in the visual arts industry, I felt the need to learn
            new skills and broaden my horizons. This is why in October 2022, I decided to start
            learning web development. My passion for problem-solving and creating meaningful
            experiences through web design grew, and in January 2023, I made the decision to pursue
            web development as a full-time job.
          </p>
          <p>
            Currently, I am focusing on developing myself as a Front-End Developer, and I am
            determined to become a Full-Stack Developer in the near future. My career journey has
            been an exciting and fulfilling experience, and I look forward to what the future holds
            as I continue to grow and evolve as a developer.
          </p>
          <h3>Hobbies? 🍿</h3>
          <p>
            Talking about hobbies, biking and tennis are my favorite sport activities, I also enjoy
            going to the beach and spending time in nature. When I'm not outside, I enjoy exploring
            my creative side through music and craftsmanship. I play guitar and am interested in
            learning the violin and saxophone. I'm also interested in investing and learning about
            global economy and tendencies in the market. Overall, I'm someone who likes to keep
            learning and enjoy life's simple pleasures.
          </p>
          <h3>Aspirations? ⏳</h3>
          <p>
            My main aspiration in life is to achieve financial freedom, not just for myself, but
            also to share a comfortable life with my loved ones. I believe that personal growth is
            important, and I am always eager to learn new things and gain knowledge to help me reach
            my goals. One of my passions is exploring new places and experiencing different
            cultures, which is why I aspire to live a fulfilling life where I can travel and create
            unforgettable memories with those closest to me. Ultimately, what I strive for is a
            peaceful and fulfilling life, where I can enjoy the simple things in life and cherish
            the moments spent with the people who matter most to me.
          </p>
        </div>
      )}
    </article>
  );
}
