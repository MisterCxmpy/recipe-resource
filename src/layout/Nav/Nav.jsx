import React from 'react'
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Nav.css"

export default function Nav() {

  let activeStyle = {
    color: "white"
  }

  let location = useLocation();

  return (
    <>
      <nav>
        <div>  
        <NavLink className="title" to="/">Recipe Resource</NavLink>
          <div className='options'>
            <button className='option btn'>Option 1</button>
            <button className='option btn'>Option 2</button>
            <button className='option btn'>Option 3</button>
          </div>
        </div>
        
        {location.pathname === "/login" ? <NavLink className="signup btn" to="/signup">Sign up</NavLink> : <NavLink className="login btn" to="/login">Login</NavLink>}
      </nav>
      <Outlet />
    </>
  )
}
