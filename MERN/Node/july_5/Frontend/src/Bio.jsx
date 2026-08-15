import React from 'react'

const Bio = () => {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const response_bio = await fetch('http://localhost:3000/users');
            if (!response_bio.ok) {
                throw new Error(`Fetch failed: ${response_bio.status}`);
            }
            setData(await response_bio.json());
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    })
    return (
        <div>Bio</div>
    )
}

export default Bio