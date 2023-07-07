import { useLocation } from "react-router-dom";
import "./_home.css";
import NavBar from "@src/components/NavBar/NavBar";
import LandingPage from "@src/routes/LandingPage/LandingPage";
import WebProjects from "@src/routes/webProjects/WebProjects";
import MotionProjects from "@src/routes/motionProjects/MotionProjects";
import Contact from "@src/routes/Contact/Contact";
import AboutMe from "@src/routes/AboutMe/AboutMe";

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
