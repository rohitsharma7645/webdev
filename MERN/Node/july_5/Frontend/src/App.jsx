import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([]);

  // async function fetchData() {
  //   try {
  //     const response_bio = await fetch('http://localhost:3000/users');
  //     if (!response_bio.ok) {
  //       throw new Error(`Fetch failed: ${response_bio.status}`);
  //     }
  //     setData(await response_bio.json());
  //   } 
  //   catch (error) {
  //     console.error(error);
  //   }
  // }

    const createItem1 = async () =>{
    const response = await axios.post("http://localhost:5000/api/items", { name: "Learn React" });
    console.log(response.data);
    return setData(await response.json())
  }
  const updateItem1 = async () =>{
    const response = await axios.put("http://localhost:5000/api/items/1", { name: "Learn React - Updated" });
    console.log(response.data);
  }
  const deleteItem1 = async () =>{
    const response = await axios.delete("http://localhost:5000/api/items/1");
    console.log(response.status);
  }
  createItem1();
  updateItem1();
  deleteItem1();

  // useEffect(()=>{
  //   fetchData();
  // })
  return (
    <div>
      <h1>Hello World</h1>
      {/* {
        data.map((item)=>{
          return (
            <div key={item.id}> 
            <h2>{item.name}</h2>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default App


// const createItem = async () => {
//     const response = await fetch('http://localhost:5000/api/items' , {
//       method:"POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({name:"New Item"})
//     });
//     const newItem = await response.json();
//     console.log(newItem);
//   };
//   const updateItem = async (id) => {
//     const reponse = await fetch(`http://localhost:5000/api/items/${id}` , {
//       method:"PUT",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({name:"Updated Item"})
//     });
//     const updatedItem = await reponse.json();
//     console.log(updatedItem);
//   }
//   const deleteItem = async (id) => {
//     await fetch(`http://localhost:5000/api/items/${id}` , {
//       method:"DELETE",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   }




