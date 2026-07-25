// import {useEffect, useState} from 'react'

import { useEffect, useState } from "react"

const App = () => {
  const [count1,setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(()=>{
    console.log('useEffect called and count:', count1, count2);
  },[count1])

  

  return (
    <div>
      {/* <button className='border border-2 p-2 m-2' onClick={()=>setCount1(count1+1)}>Increment count1</button>
      <p className='mx-2'>Count: {count1}</p>
      <button className='border border-2 p-2 m-2'  onClick={()=>setCount2(count2+1)}>Increment count2</button>
      <p className='mx-2'>Count: {count2}</p> */}
      


    </div>
  )
}

export default App


// import { useState } from "react";

// function ContactForm() {
//   const[formData, setFormData]=useState({name:"", email:""})
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted :", formData);
//     setSubmitted(true);
//   };

//   const successMessage = submitted ? (
//     <h3 className="text-green-600 mt-4">
//       ✅ Thank you! {formData.name}, your message has been submitted.
//     </h3>
//   ) : null;

//   return (
//     <section id="contact" className="px-10 py-10 text-center  bg-blue-100 ">
//       <h2 className="text-2xl font-semibold mb-6 bg-amber-200 p-5 rounded-3xl ">Contact Me</h2>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md mx-auto flex flex-col gap-4 "
//       >
//         <input
//           name="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//           className="px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           className="px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <button
//           type="submit"
//           className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Submit
//         </button>
//       </form>

//       {successMessage}
//     </section>
//   );
// }

// export default ContactForm;