import './CourseCard.css'

const CourseCard = ({ course }) => {
    return (
        <div>
            <div className="card">
                <img src={course.image} alt={course.name} />

                <div className='text'>
                    <h2><b>{course.name}</b></h2>

                    <p><b>Instructor:</b> {course.instructor}</p>

                    <p><b>Duration:</b> {course.duration}</p>

                    <p><b>Level:</b> {course.level}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard