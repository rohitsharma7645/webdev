import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-event">Add Event</Link>
      </div>
    </nav>
  );
}

export default NavBar;