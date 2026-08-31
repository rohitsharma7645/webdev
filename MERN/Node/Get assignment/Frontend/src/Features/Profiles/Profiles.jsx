import { useEffect, useState } from "react"
import { Form, InputGroup } from "react-bootstrap";
import { fuzzyMatch } from "../../Shared/fuzzySearch";
import "./Profiles.css";

const Profiles = () => {

  const [profiles, setProfiles] = useState([])
  const [search, setSearch] = useState('')

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/profiles')

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      setProfiles(await response.json())
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <div className="page-shell">

      <Form className="search-form">
        <InputGroup>
          <Form.Control
            className="search-input"
            onChange={e => setSearch(e.target.value)}
            placeholder='Search profile'
          />
        </InputGroup>

      </Form>

      <div className="cards-grid">
      {
        profiles.filter(profile => (
          fuzzyMatch(profile.name, search) ||
          fuzzyMatch(profile.role, search) ||
          profile.skill.some(skill => fuzzyMatch(skill, search))
        )).map(profile => (
            <div key={profile.id} className="item-card">
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
                <p><b>Skills: </b>{profile.skill.map(skill => (<span key={skill}>{skill}, </span>))}</p>
            </div>
          ))
      }
      </div>
    </div>
  )
}

export default Profiles
