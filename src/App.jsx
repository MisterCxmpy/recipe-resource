import React, { useEffect } from "react";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Logout, Root, Signup } from "./pages/"
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Root />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Home />}/>
            <Route path="logout" element={<Logout />}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
