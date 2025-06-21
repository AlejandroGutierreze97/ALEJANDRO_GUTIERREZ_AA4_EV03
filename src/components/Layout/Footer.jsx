import React from 'react';

/**
 * Componente de pie de página común a todas las páginas.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} MiApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;