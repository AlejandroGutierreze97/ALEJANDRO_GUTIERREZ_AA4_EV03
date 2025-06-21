import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../src/context/AuthContext';
import Button from '../UI/Button';

/**
 * Componente de cabecera que muestra la navegación y el estado de autenticación.
 */
const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MiApp
        </Link>
        
        <nav className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Button onClick={handleLogout} variant="outline-white">
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="hover:underline">
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;