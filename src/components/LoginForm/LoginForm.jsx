import React from 'react'
import "./LoginForm.css"
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className='form'>
      <h1>Login</h1>
      <form>
        <div className="input">
          <input type="text" id='username' required/>
          <span>Username</span>
        </div>
        <div className="input">
          <input type="password" id='password' required/>
          <span>Password</span>
        </div>
        <div className="input">
          <button className='btn btn-x'>Submit</button>
        </div>
        <p>Forgot Password</p>
        <NavLink className="redirect-signup" to="/signup">Don't have an account yet? Sign Up</NavLink>
      </form>
    </div>
  )
}
