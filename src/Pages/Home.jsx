import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Página de inicio pública.
 * Muestra contenido diferente según si el usuario está autenticado o no.
 */
const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a MiApp</h1>
      
      {currentUser ? (
        <div>
          <p className="mb-4">¡Hola, {currentUser.name}!</p>
          <Link 
            to="/dashboard" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Ir al Dashboard
          </Link>
        </div>
      ) : (
        <div>
          <p className="mb-8 text-lg">Por favor inicia sesión o regístrate para continuar</p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;