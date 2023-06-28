import { useLocation } from "react-router-dom";
import "./_home.css";
import NavBar from "./../../components/NavBar/NavBar";
import LandingPage from "./../LandingPage/LandingPage";
import Projects from "./../Projects/Projects";
import MotionProjects from "./../motion projects/MotionProjects";
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
        <Projects />
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
