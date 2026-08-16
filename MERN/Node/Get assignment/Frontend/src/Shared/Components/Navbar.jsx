import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
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