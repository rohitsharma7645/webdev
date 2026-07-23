import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Features from './Components/Features.jsx';
import Footer from './Components/Footer.jsx';

export const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Footer/>
        {/* <p>Hello</p> */}
    </div>
  )
}
export default Homepage