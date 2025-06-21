import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/Auth/LoginForm';

/**
 * Página de inicio de sesión.
 * Maneja la lógica de autenticación y redirección.
 */
const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;