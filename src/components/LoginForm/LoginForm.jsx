import React, { useState } from 'react';
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const Login = async (e) => {
    e.preventDefault();
    const data = { username, password };
    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    const res = await fetch(`https://localhost:8080/auth/login`, options);
  
    const { user } = await res.json();
  
    if (res.ok) {
      console.log(`Successfully logged in: ${user.username}`);
      setUser(user.username);
    } else {
      console.log("Something failed, very sad! :(");
    }
  };
  
  return (
    <div className='form'>
      <h1>Login</h1>
      <form onSubmit={Login}>
        <div className="input">
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <span>Username</span>
        </div>
        <div className="input">
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <span>Password</span>
        </div>
        <div className="input">
          <button className='btn btn-x' type="submit">Submit</button>
        </div>
        <p>Forgot Password</p>
        <NavLink className="redirect-signup" to="/signup">Don't have an account yet? Sign Up</NavLink>
      </form>
    </div>
  );
}
