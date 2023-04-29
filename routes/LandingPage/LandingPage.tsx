import Button from '../../components/Buttons/Button'
import './_landingPage.css'

export default function LandingPage(){
    return(
        <article className='landingPage-root'>
            <div className='landingPage-content'>
                <img src="/AstroAssets.png" alt="astro-riding-on-bike"/>
                <div className='landingPage-copy'>
                    <h2>
                        Combining <b>creativity, numbers,</b> and <b>code</b> to make things happen 🚀
                    </h2>
                    <br/>
                    <p>
                        Hi! I am Kinxori and <b>welcome</b> to my website! Developing myself as a <b>web developer,</b> and former <b>motion graphic artist.</b> Take a deep dive into my work!
                    </p>
                    <Button variant="secButton" to="/projects" className='landingPage-CTA'>
                         Go projects
                    </Button>
                </div>
            </div>
        </article>
    )
}