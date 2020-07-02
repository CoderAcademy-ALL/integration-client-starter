import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../config/store'

const BlogPost = ({history, post, showControls}) => {

    const {store, dispatch} = useGlobalState()
    const {blogPosts} = store
    // If we don't have a post, return null
    console.log("got post: ", post);
    if (!post) return null

    const linkStyles = {
        textDecoration: 'none',
        color: 'black' 
    }
    const buttonStyles = {
        margin: '.5em',
        fontSize: '1em'
    }
    const {title, modified_date, category, content} = post 

    // Handle the delete button
    function handleDelete(event) {
        event.preventDefault()
        const updatedPosts = blogPosts.filter((blogPost) => blogPost._id !== post._id)
        dispatch({
            type: "setBlogPosts",
            data: updatedPosts
        })
        history.push("/")
    }

    // Handle the edit button
    function handleEdit(event) {
        event.preventDefault()
        history.push(`/posts/edit/${post._id}`)
    }

    return (
        <div>
            <Link style={linkStyles} to={`/posts/${post._id}`}>
                <h1>{title}</h1>
                <p>{modified_date.toLocaleString()}</p>
                <p>{category}</p>
                <p>{content}</p>
                {showControls && (
                    <div>
                        <button style={buttonStyles} onClick={handleDelete}>Delete</button>
                        <button style={buttonStyles} onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </Link>
        </div>
    )
}

export default BlogPost