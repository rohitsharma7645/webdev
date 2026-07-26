import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    college: "",
    branch: "",
    semester: "",
    skills: "",
    bio: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  const editProfile = () => {
    setSaved(false);
  };

  return (
    <div className="profile">
      <h1>Student Profile</h1>
      <div className="profile-container">

        {!saved ? (

          <form className="profile-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={profile.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={profile.college}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={profile.branch}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="semester"
              placeholder="Semester"
              value={profile.semester}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={profile.skills}
              onChange={handleChange}
            />

            <textarea
              name="bio"
              placeholder="Write your Bio"
              value={profile.bio}
              onChange={handleChange}
            />

            <button type="submit">
              Save Profile
            </button>

          </form>

        ) : (

          <div className="profile-card">

            <h2>{profile.name}</h2>

            <p>
              <strong>College:</strong> {profile.college}
            </p>

            <p>
              <strong>Branch:</strong> {profile.branch}
            </p>

            <p>
              <strong>Semester:</strong> {profile.semester}
            </p>

            <p>
              <strong>Skills:</strong> {profile.skills}
            </p>

            <p>
              <strong>Bio:</strong> {profile.bio}
            </p>

            <button onClick={editProfile}>
              Edit Profile
            </button>

          </div>

        )}

      </div>
    </div>
  );
}

export default Profile;