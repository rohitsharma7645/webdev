import './Navbar.css';

export const Navbar = () => {
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
        </div>
    )
}

export default Navbar;