import { Link } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import './_landingPage.css'

export default function LandingPage(){
    return(
        <article className='landingPage-root'>
            <div className='landingPage-content'>
                <img className='astroBoy' src="./AstroAssets.png" alt="astro-on-bike"/>
                <div className='landingPage-copy'>
                    <h2>
                        Combining <b>creativity, numbers,</b> and <b>code</b> to make things happen. 
                    </h2>
                    <br/>
                    <h2>
                        Check out my portfolio and <b>say hello!</b> 👋
                    </h2>
                    
                </div>
            </div>
            <Button variant="secButton" to="/projects" className='landingPage-CTA'>
                Go projects
            </Button>
        </article>
    )
}