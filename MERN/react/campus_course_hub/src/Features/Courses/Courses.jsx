import CourseData from "../../Data/courses"
import CourseCard from "./Components/CourseCard"
import './Courses.css'

const Courses = () => {
  return (
    <div className="course">
    <h1>Course</h1>
    <div className="course-container">
    
      {CourseData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
    </div>
  )
}

export default Courses