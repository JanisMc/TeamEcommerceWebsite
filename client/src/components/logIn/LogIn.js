import React from 'react'
import './LogIn.css'

const LogIn = () => {
    return (
        <div className = "logInContainer">
        <div className = "logIn">
        <form class = "text">
        Username: <input type="text" name = "userName"/>
        <p>Password: <input type="password" name = "password"/></p>
        <input class = "submit" type="submit" value = "Submit"/>
        </form>
        </div>
        </div>
    )
}

export default LogIn




