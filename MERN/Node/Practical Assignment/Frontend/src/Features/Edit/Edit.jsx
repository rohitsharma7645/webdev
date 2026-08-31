import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Edit = () => {

    const [name, setName] = useState('')
    const [roll, setRoll] = useState('')
    const [branch, setBranch] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${id}`);
                const user = response.data;

                if (user) {
                    setName(user.name || '');
                    setRoll(user.roll ?? '');
                    setBranch(user.branch || '');
                    setPhone(user.phone ?? '');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            const response = await axios.put(`http://localhost:3000/users/${id}`,{
                name,
                roll:Number(roll),
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
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Change your name" /> <br/>
                <input type="text" value={roll} onChange={(e)=>setRoll(e.target.value)} placeholder="Change your roll"/> <br/>
                <input type="text" value={branch} onChange={(e)=>setBranch(e.target.value)} placeholder="Change your branch"/> <br/>
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Change your phone"/> <br/>

                <button type="submit">Edit</button>

                <Link to={'/users'}>See all users</Link>
            </form>
        </div>
    )
}

export default Edit
