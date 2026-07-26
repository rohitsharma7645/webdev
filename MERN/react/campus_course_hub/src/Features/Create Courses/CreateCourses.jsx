import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateCourses.css'

function CreateCourse({ addCourse }) {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    name: "",
    instructor: "",
    duration: "",
    level: "Beginner",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      ...course,
    };

    addCourse(newCourse);

    setCourse({
      name: "",
      instructor: "",
      duration: "",
      level: "Beginner",
      image: "",
      description: "",
    });

    navigate("/");
  };

  return (
    <div className="create-course">
      <h1>Create Course</h1>

      <form onSubmit={handleSubmit}>

        <label>Course Name</label>
        <input
          type="text"
          name="name"
          value={course.name}
          onChange={handleChange}
          placeholder="Enter Course Name"
          required
        />

        <label>Instructor</label>
        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
          placeholder="Instructor Name"
          required
        />

        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={handleChange}
          placeholder="e.g. 8 Weeks"
          required
        />

        <label>Level</label>
        <select
          name="level"
          value={course.level}
          onChange={handleChange}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>Thumbnail URL</label>
        <input
          type="text"
          name="image"
          value={course.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />

        <button type="submit">
          Create Course
        </button>

      </form>
    </div>
  );
}

export default CreateCourse;