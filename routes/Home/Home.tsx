import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import LandingPage from '../LandingPage/LandingPage'

import './_home.css'

export default function Home(){

    const location = useLocation();

    return (
        <section className="rootHome">
            <NavBar/>
            {location.pathname !== "/" ? <Outlet/> : <LandingPage/>}
        </section>
    )
}