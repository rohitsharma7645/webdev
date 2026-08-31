import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Features/Home/Home'
import Login from './Features/Login/Login'
import Edit from './Features/Edit/Edit'
import Users from "./Features/Users/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:id" element={<Home/>}/>
        <Route path="/user/edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App