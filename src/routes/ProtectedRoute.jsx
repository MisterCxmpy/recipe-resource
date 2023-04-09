import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const { user, setUser } = useAuth();
    const [ loading, setLoading ] = useState(true)
    const location = useLocation()

    useEffect(() => {
      setUser("admin")
      setLoading(false)
    }, [])

    if (!loading) {
      return user ? <Outlet />  : <Navigate to={'/login'} state={{from: location}} replace />
    }
}