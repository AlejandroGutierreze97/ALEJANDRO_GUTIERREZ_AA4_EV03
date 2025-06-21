import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

/**
 * Componente para proteger rutas privadas.
 * Redirige al login si el usuario no está autenticado.
 */
const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  
  if (!currentUser) {
    // Si no hay usuario, redirigir al login
    return <Navigate to="/login" />;
  }
  
  // Si está autenticado, renderizar el componente hijo
  return children;
};

export default PrivateRoute;