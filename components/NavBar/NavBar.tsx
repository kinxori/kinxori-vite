import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBar() {
  const [navComponent, setIsNavComponent] = useState(<MobileNav />);

  useEffect(() => {
    const handleRezise = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1180) {
        setIsNavComponent(<MobileNav />);
      } else {
        setIsNavComponent(<DesktopNav />);
      }
    };
    window.addEventListener("resize", handleRezise);
    handleRezise();
    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  return <>{navComponent}</>;
}
