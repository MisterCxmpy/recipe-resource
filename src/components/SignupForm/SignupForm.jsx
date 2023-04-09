import React from 'react'
import { NavLink } from "react-router-dom";

export default function SignupForm() {
  return (
    <div className='form'>
      <h1>Sign up</h1>
      <form>
        <div className="input">
          <input type="text" id='username' required/>
          <span>Username</span>
        </div>
        <div className="input">
          <input type="text" id='email' required/>
          <span>Email</span>
        </div>
        <div className="input">
          <input type="password" id='password' required/>
          <span>Password</span>
        </div>
        <div className="input">
          <input type="password" id='con-password' required/>
          <span>Confirm Password</span>
        </div>
        <div className="input">
          <button className='btn btn-x'>Submit</button>
        </div>
        <NavLink className="redirect-signup" to="/login">Already have an account? Sign in</NavLink>
      </form>
    </div>
  )
}
