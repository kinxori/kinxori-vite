import { useLocation } from "react-router-dom";
import "./_home.css";
import NavBar from "./../../components/NavBar/NavBar";
import LandingPage from "./../LandingPage/LandingPage";
import WebProjects from "./../webProjects/WebProjects";
import MotionProjects from "./../motionProjects/MotionProjects";
import Contact from "./../Contact/Contact";
import AboutMe from "./../AboutMe/AboutMe";

export default function Home() {
  const location = useLocation();

  return (
    <section className="rootHome">
      <NavBar />
      {location.pathname === "/" ? (
        <LandingPage />
      ) : location.pathname === "/webprojects" ? (
        <WebProjects />
      ) : location.pathname === "/motionprojects" ? (
        <MotionProjects />
      ) : location.pathname === "/contact" ? (
        <Contact />
      ) : location.pathname === "/about" ? (
        <AboutMe />
      ) : (
        <LandingPage />
      )}
    </section>
  );
}
