import Button from "./../../components/Buttons/Button";
import "./_landingPage.css";

const mainLandingPageAsset = "./../../src/assets/AstroAssets.png";

export default function LandingPage() {
  return (
    <article className="landingPage-root">
      <div className="landingPage-content">
        <img
          src={mainLandingPageAsset}
          alt="Purple Astro riding a bike - Kinxori landing page asset"
        />
        <div className="landingPage-copy">
          <h2>
            Combining <b>creativity, numbers,</b> and <b>code</b> to make things happen 🚀
          </h2>
          <p>
            Hi! I am Kinxori and <b>welcome</b> to my website! Developing myself as a
            <b> web developer</b> and <b>motion designer.</b> Take a deep dive into my work!
          </p>
          <Button variant="secButton" to="/projects" className="landingPage-CTA">
            Go projects
          </Button>
        </div>
      </div>
    </article>
  );
}
