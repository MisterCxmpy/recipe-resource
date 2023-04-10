import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../context/AuthContext";
import Footer from "../Footer/Footer";


export default function Nav() {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false)

  let location = useLocation();
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <nav>
        <div>
          <NavLink className="title" to="/">
            Recipe Resource
          </NavLink>
          {user ? (
            <div className="options">
              <NavLink className="option btn" to="/home">
                Home
              </NavLink>
              <button className="option btn">Option 2</button>
              <button className="option btn">Option 3</button>
            </div>
          ) : (
            ""
          )}
        </div>
        {!user ? (
          location.pathname === "/login" ? (
            <NavLink className="signup btn" to="/signup">
              Sign up
            </NavLink>
          ) : (
            <NavLink className="login btn" to="/login">
              Login
            </NavLink>
          )
        ) : (
          <NavLink className="logout btn" to="/logout">
            Sign out
          </NavLink>
        )}
      </nav>
      <button className="return-to-top" onClick={scrollToTop} style={{opacity: visible ? 1 : 0}}>
        &#10095;
      </button>
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
