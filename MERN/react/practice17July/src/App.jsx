import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Features/Home/Home';
import About from './Features/About/About'
import Navbar from "./Shared/Components/Navbar";

const App = () => {
  return (

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App