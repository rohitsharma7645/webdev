import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Features/Profile/Profile"
import Home from "./Features/Home/Home"
import Navbar from "./Shared/Components/Navbar"
import CreateCourses from "./Features/Create Courses/CreateCourses"
import Courses from "./Features/Courses/Courses"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/CreateCourses" element={<CreateCourses/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
