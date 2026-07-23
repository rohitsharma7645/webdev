import './App.css'
import heroImg from './assets/hero.jpeg'

function App() {
  return (
    <div>
      <navbar className='nav'>
        <div className="logo"> <h2>Practice</h2> </div>
        

        <div className="nav-links">
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </navbar>

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

export default App