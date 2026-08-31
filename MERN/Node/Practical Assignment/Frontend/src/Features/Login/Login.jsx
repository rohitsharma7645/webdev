import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [name,setName] = useState('')
    const [roll, setRoll] = useState('')
    const [branch,setBranch] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try{
            const response = await axios.post("http://localhost:3000/login",{
                name,     // we can also write name:name
                roll: Number(roll),
                branch,
                phone:Number(phone)
            })
            navigate(`/user/${response.data.id}`);
        } catch(error){
            console.error(error)
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
                <input type="number" placeholder="Enter your roll"  value={roll} onChange={(e)=>setRoll(e.target.value)}/> <br />
                <input type="text" placeholder="Enter your branch" value={branch} onChange={(e)=>setBranch(e.target.value)} /> <br />
                <input type="phone" placeholder="Enter your phone" value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login