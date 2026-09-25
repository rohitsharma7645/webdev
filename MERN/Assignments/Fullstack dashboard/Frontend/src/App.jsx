import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Features/Login/Login";
import Register from "./Features/Register/Register";
import Users from "./Features/Users/Users";
import Products from "./Features/Products/Products";
import Navbar from "./Shared/Navbar";
import EditProduct from "./Features/EditProduct/EditProduct";
import AddProduct from "./Features/AddProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
