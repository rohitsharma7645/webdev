import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
      <Link to="/add-product">Add Products</Link>
    </nav>
  );
}

export default Navbar;
