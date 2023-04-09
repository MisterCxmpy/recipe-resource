import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ logged, children }) {
  const { user } = useAuth();

  if (user) {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}