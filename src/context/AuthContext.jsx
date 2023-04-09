import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext  = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);