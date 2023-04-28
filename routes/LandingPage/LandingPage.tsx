import Button from '../../components/Buttons/Button'
import './_landingPage.css'

export default function LandingPage(){
    return(
        <article className='landingPage-root'>
            <div className='landingPage-content'>
                <img className='astroBoy' src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/AstroAssets.png?alt=media&token=b7376c07-e307-428f-ac23-cbcd24fd0e6b" alt="astro-riding-on-bike"/>
                <div className='landingPage-copy'>
                    <h2>
                        Combining <b>creativity, numbers,</b> and <b>code</b> to make things happen 🚀
                    </h2>
                    <br/>
                    <p>
                        Hi! I am Kinxori and <b>welcome to my website!</b> Developing myself as a <b>web developer,</b> former <b>motion graphic artist</b> and <b>internaut.</b> Take a deep dive into my work!
                    </p>
                    <Button variant="secButton" to="/projects" className='landingPage-CTA'>
                         Go projects
                    </Button>
                </div>
            </div>
            
        </article>
    )
}