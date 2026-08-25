import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Shared/Components/Navbar'
import Home from './Features/Home/Home'
import Blog from './Features/Blogs/Blog'
import Products from './Features/Products/Products'
import Profiles from './Features/Profiles/Profiles'
import BlogsDetails from './Shared/BlogDetails'
import ProductsDetail from './Shared/ProductsDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blogs' element={<Blog />} />
        <Route path='/Blogs/:id' element={<BlogsDetails/>}/>
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/:id' element={<ProductsDetail/>}/>
        <Route path='/Profiles' element={<Profiles/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
