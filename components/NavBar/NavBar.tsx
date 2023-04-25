import { useEffect, useState } from "react";
import MobileNav from './MobileNav'
import TableNav from './TabletNav'
import DesktopNav from './DesktopNav'



export default function NavBar(){
    const [navComponent, setIsNavComponent] = useState(<MobileNav/>);

    useEffect(()=>{
        const handleRezise = ()=>{
            const screenWidth = window.innerWidth;
            if(screenWidth <= 600){
                setIsNavComponent(<MobileNav/>);
            } else if (screenWidth <= 1200){
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
        <>
            {navComponent}
        </>
    )
}