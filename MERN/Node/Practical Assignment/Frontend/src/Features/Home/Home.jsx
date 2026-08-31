import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {

    const {id} = useParams()
    const [user,setUser] = useState(null)

    const fetchUser = async()=>{
        try{
            const response = await axios.get(`http://localhost:3000/users/${id}`)
            setUser(response.data)
        } catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchUser()
    },[id])

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome {user.name}</h1>
                    <p>Roll No: {user.roll}</p>
                    <p>Branch: {user.branch}</p>
                    <p>Phone: {user.phone}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}

            <Link to={'/users'}>See all users</Link>
        </div>
    )
}

export default Home
