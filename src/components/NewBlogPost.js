import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {divStyles, inputStyles, labelStyles} from '../styles'
import {useGlobalState} from '../config/store'
import {addBlogPost} from '../services/blogPostServices';

const NewBlogPost = ({history}) => {
    const textAreaStyles = {
        height: "200px",
        margin: ".5em",
        width: "70vw"
    }

 

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const newPost = {
            title: formState.title,
            category: formState.category || "general",
            content: formState.content
        }
        addBlogPost(newPost)
        .then( newPost => {
            dispatch({
                type: "setBlogPosts",
                data: [newPost, ...blogPosts]
            })
            history.push(`/posts/${newPost._id}`)
        })
        .catch(error => {
            console.log("Caught error making post: ", error);
        })
       
        
    }
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    } 
    const [formState,setFormState] = useState(initialFormState)
    const {store, dispatch} = useGlobalState()
    const {blogPosts} = store

    return (
        <form id="newPostForm" onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" placeholder="Enter a title" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles} type="text" name="category" placeholder="Enter a category" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea form="newPostForm" required style={textAreaStyles} name="content" placeholder="Enter post here" onChange={handleChange}></textarea>
            </div>
            <input type="submit" value="Add post"></input>
        </form>
    ) 
}

export default withRouter(NewBlogPost)