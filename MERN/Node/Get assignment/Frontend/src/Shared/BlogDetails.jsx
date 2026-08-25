import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BlogDetails.css";


const BlogDetails = () => {

  const {id} = useParams();

  const [blog,setBlog] = useState(null)

  const fetchBlog = async()=>{
    try{
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`)

      if(!response.ok){
        throw new Error('Failed to fetch product data');
      }
      setBlog(await response.json())
    } catch (error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchBlog();
  },[id])

  if (!blog) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page-shell">
      <div className="detail-card">
      <h1>{blog.title}</h1>

      <h3>{blog.summary}</h3>

      <p>{blog.body}</p>

      <Link to="/Blogs">Back to Blogs</Link>
      </div>
    </div>
  )
}

export default BlogDetails
