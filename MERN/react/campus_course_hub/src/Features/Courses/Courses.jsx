import CourseData from "../../Data/courses"
import CourseCard from "./Components/CourseCard"
import './Courses.css'

const Courses = () => {
  return (
    <div>
      {CourseData.map(course=>{
        <CourseCard>{course}</CourseCard>
      })}
    </div>
  )
}

export default Courses