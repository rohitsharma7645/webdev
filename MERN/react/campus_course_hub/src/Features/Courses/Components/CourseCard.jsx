import './CourseCard.css'

const CourseCard = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.image} alt={props.name} />

                <h2>{props.name}</h2>

                <p>Instructor: {props.instructor}</p>

                <p>Duration: {props.duration}</p>

                <p>Level: {props.level}</p>
            </div>
        </div>
    )
}

export default CourseCard