import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../context/AuthContext";

export default function Nav() {
  const { user } = useAuth();

  let location = useLocation();

  return (
    <>
      <nav>
        <div>
          <NavLink className="title" to="/">
            Recipe Resource
          </NavLink>
          {user ? (
            <div className="options">
              <button className="option btn">Option 1</button>
              <button className="option btn">Option 2</button>
              <button className="option btn">Option 3</button>
            </div>
          ) : (
            ""
          )}
        </div>
        {location.pathname === "/login" ? (
          <NavLink className="signup btn" to="/signup">
            Sign up
          </NavLink>
        ) : (
          <NavLink className="login btn" to="/login">
            Login
          </NavLink>
        )}
      </nav>
      <Outlet />
    </>
  );
}
