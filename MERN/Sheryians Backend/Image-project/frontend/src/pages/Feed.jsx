import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts,setPosts] = useState([{

        _id:"1",
        image:"https://images.unsplash.com/photo-1682685794700-1f3e7c5b8d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        caption:"This is a beautiful image"
    }])

useEffect(()=>{

    axios.get("https://localhost:3000/posts")
    .then((res)=>{
        setPost(res.data.posts)
    })
},[])

    return(
        <section className='feed-section'>
     {
        post.length>0?(
            posts.map((post)=>(
                <div key={post._id} className='post'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))) : (
            <h1>No posts available</h1>
        )
    }
    </section>
    )

}

export default Feed