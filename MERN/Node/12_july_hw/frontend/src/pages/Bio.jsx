import {useEffect, useState} from "react";

const Bio = () => {
    const [bio, setBio] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/bio");
                const result = await response.json();

                setBio(result);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className="bio-container">
        <p> Hii Everyone</p>
        
        {bio.map((item, index) => (
        <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.bio}</p>
            <h4>{item.role}</h4>
        </div> 
      ))}


    </div>
  )
}

export default Bio