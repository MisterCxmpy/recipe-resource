import React from "react";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Root from "./pages/Root/Root";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Root />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
