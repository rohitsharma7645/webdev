import { useState } from "react";

const App = () => {
  const [count,setCount] = useState(0);
  const [name, setName] = useState('');
  const [roll, setRoll] = useState(0);
  const [course, setCourse] = useState('');
  const [student, setStudent] = useState({
    name:'',
    roll:'',
    course:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    setName(name);
    setRoll(roll);
    setCourse(course);
  setStudent({
    name:'', 
    roll:'', 
    course:'',
  })
  }

  // const [count, setCount] = useState(0);

  const handleClick=()=>{
    count<=15?setCount(count+1):setCount(0)
  }
  
  return (
    <div> 
    <p >I have {count} </p>

    <button onClick={()=>{handleClick}}>Get 1 </button>
    <form action="">
      <input type="text"id='name' value={student.name} />
      <input type="text"id='roll' value={student.roll} />
      <input type="text"id='course' value={student.course} />

      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
    <h1>Student details</h1>
    <p>Name: {student.name}</p>
    <p>Roll: {student.roll}</p>
    <p>Course: {student.course}</p>
    </div>
  )
}

export default App;