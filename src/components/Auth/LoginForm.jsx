import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

/**
 * Formulario de inicio de sesión reutilizable.
 * Controla su propio estado y valida los campos básicos.
 */
const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <Input
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      
      <Button type="submit" className="w-full">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;