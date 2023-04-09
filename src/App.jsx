import React from 'react'
import Nav from './layout/Nav/Nav'
import Footer from './layout/Footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Root from './pages/Root/Root'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Root />}/>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup />}/>
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  )
}
