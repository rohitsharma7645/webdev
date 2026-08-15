import { useEffect, useState } from "react"

const App = () => {
  const [data,setData] = useState([]);

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

  useEffect(()=>{
    fetchData();
  })
  return (
    <div>
      <h1>Hello World</h1>
      {
        data.map((item)=>{
          return (
            <div key={item.id}> 
            <h2>{item.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default App