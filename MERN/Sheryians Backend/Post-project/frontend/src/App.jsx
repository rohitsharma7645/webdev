import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed.jsx'

const App = () =>{
  return (
    <Router>
      <Routes>
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path="/feed" element={<h1>Feed</h1>} />
      </Routes>
    </Router>
  )
}

export default App