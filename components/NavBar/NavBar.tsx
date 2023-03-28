import { useEffect, useState } from "react";
import MobileNav from './MobileNav'
import TableNav from './TabletNav'
import DesktopNav from './DesktopNav'


export default function NavBar(){
    const [navComponent, setIsNavComponent] = useState(<MobileNav/>);

    useEffect(()=>{
        const handleRezise = ()=>{
            const screenWidth = window.innerWidth;
            if(screenWidth <= 375){
                setIsNavComponent(<MobileNav/>);
            } else if (screenWidth <= 820){
                setIsNavComponent(<TableNav/>);
            } else {
                setIsNavComponent(<DesktopNav/>);
            }
        };
        window.addEventListener("resize", handleRezise);
        handleRezise();
        return ()=> window.removeEventListener("resize", handleRezise);
    },[]);

    return(
        <section>
            {navComponent}
        </section>
    )
}