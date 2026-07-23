import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

        <nav className="p-4 flex justify-between items-centre ">
            <div className='font-bold text-2xl '>CourseHub</div>
            <div className='flex items-center gap-6 '>
              <Link to='/'>Home</Link>
              <Link to='/About'>About</Link>
            </div>
        </nav>

  )
}

export default Navbar