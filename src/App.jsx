import React from 'react'
import Nav from './layout/Nav/Nav'
import Footer from './layout/Footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Root from './pages/Root/Root'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Root />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
