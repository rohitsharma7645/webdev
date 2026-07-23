import './Hero.css';
import heroImg from 'C:/Users/sharm/OneDrive/Desktop/webdev/Frontend/react/july_9/src/assets/hero.jpeg';



const Hero = () => {
    return (
        <div>
            
            <section className="hero">
                <div className="txt">
                    <h1 className="hero-heading">Become a better frontend developer.</h1>
                    <p id="p1">Take your frontend skills to the next level by recreating <b>real websites</b> from <b>real companies.</b></p>
                    <p id="p2">The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
                    <div className="btns">
                        <button id="btn1">View Projects</button>
                        <button id="btn2">Learn more</button>
                    </div>
                </div>
                <img src={heroImg} alt="" />
            </section>
            
        </div>
    )
}
export default Hero