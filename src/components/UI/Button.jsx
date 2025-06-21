import React from 'react';

/**
 * Componente de botón reutilizable con variantes.
 * @param {string} variant - Tipo de botón ('primary', 'outline', etc.)
 * @param {string} className - Clases CSS adicionales
 * @param {object} props - Otras propiedades del botón
 */
const Button = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    'outline-white': 'border border-white text-white hover:bg-white hover:text-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;