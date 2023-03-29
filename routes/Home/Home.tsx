import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import LandingPage from '../LandingPage'
import './_home.css'

export default function Home(){

    const location = useLocation();
    console.log(location)

    return (
        <section className="rootHome">
            <NavBar/>
            {location.pathname !== "/" ? <Outlet/> : <LandingPage/>}
        </section>
    )
}