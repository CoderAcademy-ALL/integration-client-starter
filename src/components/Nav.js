import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../config/store'

const Nav = () => {
    const divStyles = {
        display: 'flex'
    }
    const linkStyles = {
        fontSize: '1.2em',
        textDecoration: 'none',
        margin: '.5em'
    }
    // Logout user
    function handleLogout() {
        dispatch({
        type: "setLoggedInUser",
        data: null
        })
    }
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store
    return (
        <div style={divStyles}>
            {loggedInUser 
            ? (<div>
                <Link style={linkStyles} to="/">{loggedInUser}</Link>
                <Link style={linkStyles} onClick={handleLogout} to="/">Logout</Link>
                </div>)
            : (<div>
                <Link style={linkStyles} to="/">guest</Link>
                <Link style={linkStyles} to="/auth/login">Login</Link>
                <Link style={linkStyles} to="/auth/register">Register</Link>
                </div>)
            }
            <div >
                <Link style={linkStyles} to="/">Home</Link>
                <Link style={linkStyles} to="/posts/new">Add a post</Link>
            </div>
        </div>
    )
}

export default Nav