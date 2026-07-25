import './CourseCard.css'

const CourseCard = ({ course }) => {
    return (
        <div>
            <div className="card">
                <img src={course.image} alt={course.name} />

                <div className='text'>
                    <h2>{course.name}</h2>

                    <p>Instructor: {course.instructor}</p>

                    <p>Duration: {course.duration}</p>

                    <p>Level: {course.level}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard