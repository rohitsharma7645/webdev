import { NavLink } from "react-router-dom"

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-white font-semibold bg-[#309255]"
            : "text-black-800"

    return (
        <nav className="flex justify-between items-center px-20 py-3 shadow-2xs ">
            <div className="font-bold text-3xl">Gyaan Setu</div>
            <div className="flex justify-between items-center gap-2">
                <NavLink to="/" className={({ isActive }) => `${linkClass({ isActive })} py-2 px-4 rounded-sm `}>Home</NavLink>
                <NavLink to="/Courses" className={({ isActive }) => `${linkClass({ isActive })} py-2 px-4 rounded-sm`}>Courses</NavLink>
                <NavLink to="/CreateCourses" className={({ isActive }) => `${linkClass({ isActive })} py-2 px-4 rounded-sm`}>Create Courses</NavLink>
                <NavLink to="/Profile" className={({ isActive }) => `${linkClass({ isActive })} py-2 px-4 rounded-sm`}>Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar