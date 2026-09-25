import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/auth/register",{
                    name,
                    email,
                    password
                });

            navigate("/login");

        } catch (error) {
            console.log(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="register-page">
            <h2>Register</h2>

            <form className="register-form" onSubmit={handleRegister}>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;
