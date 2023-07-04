import { useEffect, useState } from "react";
import "./_aboutMe.css";
import Button from "@components/Buttons/Button";
import mainAboutMeAsset from "@src/assets/AboutmeAsset.png";
import imgAssetPFP from "@src/assets/new-pfp-for-social-network.jpg";

export default function AboutMe() {
  const [isOpen, setisOpen] = useState(() => {
    const storedState = localStorage.getItem("isReadMore");
    return storedState ? storedState === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("isReadMore", isOpen.toString());
  }, [isOpen]);

  return (
    <article className="aboutMe-root">
      <div className="aboutMe-content">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori about page"
          className="about-me-asset"
        />
        <div className="aboutMe-copy">
          <h2>
            But... <b>Who is Kinxori?</b> 🤔
          </h2>

          <p>
            My name is Gustavo Quiroz, <b> front-end web developer </b> with a passion for creating
            things. Formerly a <b> motion design, </b> now using my love for creating to
            <b> solve problems. </b>
          </p>
          <div className="aboutMe-CTA">
            <Button variant="secButton" onClick={() => setisOpen(!isOpen)}>
              {isOpen ? "Read less" : "Read more"}
            </Button>
          </div>
        </div>
      </div>
      {isOpen === true && (
        <div className="about-me-read-more-content">
          <div className="aboutme-copy-PFP">
            <img src={imgAssetPFP} alt="Gustavo Quiroz - Kinxori"></img>
          </div>
          <h3>🌎 Where do I come from?</h3>
          <p>
            <b> Born in 1998, </b> I come from a small town near the central region of
            <b> Mexico. </b>
            Despite its size,the town has a <b>rich cultural heritage,</b>
            with vibrant music and dance traditions, colorful festivals, and delicious local
            cuisine. Growing up there
            <b> has taught me </b> the value of
            <b> community, hard work, and creativity, </b>
            <b> which I carry with me </b> wherever I go.
          </p>
          <h3>💆 Personality?</h3>
          <p>
            I'm a person who enjoys a <b> balanced lifestyle. </b> While I'm not necessarily
            extroverted, I enjoy my time at home. I find peace and serenity in my surroundings and
            like to
            <b> make the most of it. </b> However, that doesn't mean I don't like going out.
            <b> I enjoy having dinner with friends </b> and engaging in deep conversations. When I'm
            not socializing, I like to
            <b> study and listen to music. </b> I strive to live a meaningful life, and I'm
            <b> always looking for ways to improve myself </b> and my surroundings.
          </p>
          <h3>👨‍🎓 Career?</h3>
          <p>
            Throughout my career path, I have pursued my
            <b> passion for creativity and visual arts. </b>
            After graduating with a degree in
            <b> Animation and Visual Effects in 2020, </b> I landed a job as a 2D Cut-Out Animator
            and Background Illustrator from 2020-2021. This was just the start of my journey, as I
            eventually progressed to become a<b> Lead Motion Designer </b> in a Canadian marketing
            agency in <b> August, 2021. </b>
          </p>
          <p>
            Although I had a successful career in the visual arts industry,
            <b>I felt the need to learn new skills and broaden my horizons.</b>
            This is why in
            <b> October 2022, </b> I decided to
            <b> start learning web development. </b> My passion for
            <b> problem-solving </b> and creating meaningful experiences through
            <b> web design </b>
            grew, and in <b> January 2023, </b> I made the decision to
            <b> pursue web development as a full-time job. </b>
          </p>
          <p>
            Currently, I am focusing on developing myself as a<b> Front-End Developer, </b> and I am
            determined to become a<b> Full-Stack Developer </b> in the near future. My career
            journey has been an exciting and fulfilling experience, and I look forward to what the
            future holds as I continue to
            <b> grow and evolve as a developer. </b>
          </p>
          <h3>🍿 Hobbies?</h3>
          <p>
            Talking about hobbies, <b> biking and tennis are my favorite sport activities, </b> I
            also enjoy <b> going to the beach </b> and spending time in nature. When I'm not
            outside, I enjoy exploring my creative side through <b> music and craftsmanship. </b> I
            play guitar and am interested in <b> learning the violin and saxophone. </b> I'm also
            <b> interested in investing </b> and learning about global economy and tendencies in the
            market. Overall, I'm someone who likes to
            <b> keep learning and enjoy life's simple pleasures. </b>
          </p>
          <h3>⏳ Aspirations?</h3>
          <p>
            My main aspiration in life is to <b> achieve financial freedom, </b> not just for
            myself, but also to <b> share a comfortable life with my loved ones. </b> I believe that
            personal growth is important, and I am <b> always eager to learn new things </b> and
            gain knowledge to help me <b> reach my goals. </b> One of my passions is exploring new
            places and <b> experiencing different cultures, </b> which is why I aspire to live a
            fulfilling life where I can travel and <b> create unforgettable memories </b> with those
            closest to me. Ultimately, what <b> I strive for is a peaceful and fulfilling life, </b>
            where I can enjoy the simple things in life and cherish the moments
            <b> spent with the people who matter most to me. </b>
          </p>
          <i>17th of June, 2023 / Mexico</i>
        </div>
      )}
    </article>
  );
}
