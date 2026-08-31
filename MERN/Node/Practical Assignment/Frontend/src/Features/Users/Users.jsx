import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async()=>{
        try{
            const response = await axios.get('http://localhost:3000/users')
            console.log(response.data)

            setUsers(response.data)
        } catch(error){
            console.error(error)
        }
    }


    useEffect(()=>{
        fetchUsers()
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h1>{user.name}</h1>
                <p> <b>Roll:</b> {user.roll} </p>
                <p> <b>Branch:</b> {user.branch} </p>
                <p> <b>Phone:</b> {user.phone} </p>

                <Link to={`/user/edit/${user.id}`}>Edit</Link>
                
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Users
