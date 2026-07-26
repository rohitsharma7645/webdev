import { useState } from "react"
import coursesData from "./Data/courses"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./Features/Profile/Profile"
import Home from "./Features/Home/Home"
import Navbar from "./Shared/Components/Navbar"
import CreateCourses from "./Features/Create Courses/CreateCourses"
import Courses from "./Features/Courses/Courses"

const App = () => {

  const [courses, setCourses] = useState(coursesData);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses courses={courses}/>} />
        <Route path="/CreateCourses" element={<CreateCourses addCourse={addCourse}/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
