import { Link } from 'react-router-dom'
import './Hero.css'
import img from '../../../assets/hero.png'

const Hero = () => {
    return (
            <div className="hero">
                <div className="txt">
                    <h3>Start your favorite course</h3>
                    <h1>Now learning from anywhere, and build your <span>bright career.</span> </h1>
                    <p>It has survived not only five centuries but sho the leap into electronic typesetting</p>
                    <Link to='/Courses' className='hero-btn'>Start A Course</Link>
                </div>
                <img className='img' src={img} alt="Student image"  />
            </div>
    )
}

export default Hero