
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App