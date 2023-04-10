import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import "./Logout.css"

export default function Logout() {

  const { setUser } = useAuth()
  const navigate = useNavigate()

  const signOut = async () => {
    const res = await fetch(`https://localhost:8080/auth/logout`, { credentials: "include" });

    if (res.ok) {
      console.log("Successfuly logged out!");
      localStorage.setItem("user", "")
      setUser("")
      navigate("/")
    } else {
      console.log("Something failed, very sad! :(");
    }
  };

  useEffect(() => {
    signOut()
  }, [])

  return (
    <div className='logout-container'>
      Logging out
    </div>
  )
}
