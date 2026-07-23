import Home from "./Features/Home/HomePage.jsx";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;


// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <div style={{
//         border: "1px solid black", padding: "16px", display: "flex",
//         justifyContent: "space-between"
//       }}>
//         <h2>MyBrand</h2>
//         <div>
//           <span>Home</span>
//           <span>About</span>
//           <span>Contact</span>
//         </div>
//       </div>
      
//       {/* Features */}
//       <div style={{ border: "1px solid black", padding: "24px" }}>
//         <h2>Our Features</h2>
//         <div style={{ display: "flex", gap: "16px" }}>
//           <div style={{
//             border: "1px solid black", padding: "16px", width:
//               "200px"
//           }}>
//             <h3>Fast</h3>
//             <p>Everything loads quickly.</p>
//           </div>
//           <div style={{
//             border: "1px solid black", padding: "16px", width:
//               "200px"
//           }}>
//             <h3>Simple</h3>
//             <p>Easy to use for everyone.</p>
//           </div>
//           <div style={{
//             border: "1px solid black", padding: "16px", width:
//               "200px"
//           }}>
//             <h3>Reliable</h3>
//             <p>Works the same, every time.</p>
//           </div>
//         </div>
//       </div>
//       {/* About */}
//       <div style={{ border: "1px solid black", padding: "24px" }}>
//         <h2>About Us</h2>
//         <p>We are a small team learning React, one component at a time.</p>
//       </div>
//       {/* Footer */}
//       <div style={{
//         border: "1px solid black", padding: "16px", textAlign:
//           "center"
//       }}>
//         <p>&copy; 2026 MyBrand. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }
// export default App;