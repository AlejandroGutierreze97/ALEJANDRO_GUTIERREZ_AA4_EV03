import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import RegisterForm from '../components/Auth/RegisterForm';

/**
 * Página de registro de nuevos usuarios.
 * Maneja la lógica de registro y redirección.
 */
const Register = () => {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError('Error en el registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Registrarse</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;