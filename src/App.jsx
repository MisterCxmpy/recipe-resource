import React, { useEffect } from "react";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Root from "./pages/Root/Root";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Logout from "./pages/Logout/Logout";
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
      <Footer />
    </>
  );
}
