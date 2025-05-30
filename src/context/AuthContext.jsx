import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Set auth token header
useEffect(() => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
}, [token]);


 const register = async (formData) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', formData);
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.response?.data?.error || 'Registration failed' };
  }
};


  // const login = async (formData) => {
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/auth/login', formData);
  //     localStorage.setItem('token', res.data.token);
  //     setToken(res.data.token);
  //     setUser(res.data.user);
  //     return { success: true };
  //   } catch (err) {
  //     return { success: false, error: err.response.data.error };
  //   }
  // };


   const login = async (formData) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);

    console.log("Login response:", res.data); // Debugging line
    if (!res.data || !res.data.token || !res.data.user) {
      throw new Error('Invalid response from server');
    }


    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
    return { success: true, user: res.data.user }; // return user here
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    return { success: false, error: err.response?.data?.error || 'Login failed' };
  }
};
 

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;