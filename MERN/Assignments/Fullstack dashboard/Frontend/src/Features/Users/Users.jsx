import { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import "./Users.css";

function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getUsers = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get("http://localhost:5000/api/users",{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            setUsers(response.data);
            setFilteredUsers(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!search.trim()) {
                setFilteredUsers(users);
                return;
            }

            const fuse = new Fuse(users, {
                keys: ["name", "email"],
                threshold: 0.4
            });

            const results = fuse.search(search);
            setFilteredUsers(results.map(result => result.item));

        }, 300);

        return () => clearTimeout(timer);
    }, [search, users]);

    const deleteUser = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(`http://localhost:5000/api/users/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            getUsers();

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="users-page">
            <h2>Users</h2>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredUsers.map((user) => (
                <div className="user-row" key={user.id}>
                    <p>
                        {user.name} - {user.email}
                    </p>

                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Users;
