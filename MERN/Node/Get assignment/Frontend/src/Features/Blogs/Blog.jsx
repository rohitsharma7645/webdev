import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/blogs')

            if (!response.ok) {
                throw new Error("Failed to fetch blog data");
            }
            setBlogs(await response.json())
        } catch (error) {
            console.error("Error fetching blogs", error)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    

    return (
        <div className="page-shell">
            <div className="cards-grid">
            {
                blogs.map((blog) => (
                    <Link to={`/Blogs/${blog.id}`} key={blog.id} className="item-link">
                        <div className="item-card">
                            <h3>{blog.title}</h3>
                            <h5 >{blog.summary}</h5>
                            <p>{blog.body}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </div>
    );
};

export default Blog;
