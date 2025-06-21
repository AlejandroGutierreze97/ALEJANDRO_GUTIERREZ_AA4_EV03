import React, { createContext, useState, useEffect } from 'react';

/**
 * Contexto de autenticación.
 * Maneja el estado global de autenticación y proporciona funciones para login/logout.
 */
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simular persistencia de sesión al recargar
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  /**
   * Función para iniciar sesión
   * @param {object} userData - Datos del usuario (email, password)
   */
  const login = (userData) => {
    // Aquí iría la llamada a tu API real
    const mockUser = {
      id: '123',
      email: userData.email,
      name: userData.email.split('@')[0]
    };
    
    setCurrentUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  /**
   * Función para registrar un nuevo usuario
   * @param {object} userData - Datos del nuevo usuario
   */
  const register = (userData) => {
    // Aquí iría la llamada a tu API real
    const mockUser = {
      id: '123',
      email: userData.email,
      name: userData.name || userData.email.split('@')[0]
    };
    
    setCurrentUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  /**
   * Función para cerrar sesión
   */
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // Valor proporcionado por el contexto
  const value = {
    currentUser,
    login,
    logout,
    register,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};