
'use client';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (username, email, password, date, time) => {
    const response = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, date, time, addresses: [] }),
    });
    if (!response.ok) throw new Error('Registration failed');
    const user = await response.json();
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };

  const login = async (email, password) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        setCurrentUser(user);
        return user;
      }
    }
    const response = await fetch('http://localhost:4000/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    const users = await response.json();
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid credentials');
  };

    const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const updateAddresses = (newAddresses) => {
    const updatedUser = { ...currentUser, addresses: newAddresses };
    setCurrentUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    fetch('http://localhost:4000/users', {
      method: 'POST', // Simplified for MSW; in production, use PUT with user ID
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login,logout, updateAddresses }}>
      {children}
    </AuthContext.Provider>
  );
};