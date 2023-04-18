import Button from '../../components/Buttons/Button'
import './_landingPage.css'

export default function LandingPage(){
    return(
        <article className='landingPage-root'>
            <div className='landingPage-content'>
                <img className='astroBoy' src="./AstroAssets.png" alt="astro-on-bike"/>
                <div className='landingPage-copy'>
                    <h2>
                        Combining <b>creativity, numbers,</b> and <b>code</b> to make things happen 🚀
                    </h2>
                    <br/>
                    <p>
                        Hi and <b>welcome to my website!</b> Take a deep dive into my work as a <b>web developer,</b> as a <b>motion graphic artist</b> or as an <b>internaut.</b> 
                    </p>
                </div>
            </div>
            <Button variant="secButton" to="/projects" className='landingPage-CTA'>
                Go projects
            </Button>
        </article>
    )
}