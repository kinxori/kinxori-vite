import { useLocation } from "react-router-dom";
import "./_home.css";
import NavBar from "@components/NavBar/NavBar";
import LandingPage from "@routes/LandingPage/LandingPage";
import WebProjects from "@routes/webProjects/WebProjects";
import MotionProjects from "@routes/motionProjects/MotionProjects";
import Contact from "@routes/Contact/Contact";
import AboutMe from "@routes/AboutMe/AboutMe";

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
