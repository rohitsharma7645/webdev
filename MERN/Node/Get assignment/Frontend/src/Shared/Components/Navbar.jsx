import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Rohit</div>

      <div className="navLinks">
        <Link to='/'>Portfolio</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Blogs'>Blogs</Link>
        <Link to='/Profiles'>Profile</Link>
      </div>
    </nav>
  )
}

export default Navbar
