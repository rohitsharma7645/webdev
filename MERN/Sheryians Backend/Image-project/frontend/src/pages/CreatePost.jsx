import React from 'react'

const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("https://localhost:3000/create-post", formData)
    .then((res)=>{
       console.log(res)
    })
    
    .catch((err)=>{
        console.log(err)
        alert("Error creating post")    
    })
}

const CreatePost = () => {
    return(
        <section className="create-post-section">

            <h1>Create Post</h1>

            <form>
                <input type="file" name="image" accept="image/*" />
                <input type="text" name= "caption" placeholder="Enter Caption" required />
                <button type="submit">Submit</button>
            </form>

        </section>
    )
}

export default CreatePost