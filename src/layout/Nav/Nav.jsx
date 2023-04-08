import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
  return (
    <>
      <nav>
        <div>  
          <h1 className='title'>Recipe Resource</h1>
          <div className='options'>
            <button className='option btn'>Option 1</button>
            <button className='option btn'>Option 2</button>
            <button className='option btn'>Option 3</button>
          </div>
        </div>
        <button className='login btn'>Login</button>
      </nav>
      <Outlet />
    </>
  )
}
