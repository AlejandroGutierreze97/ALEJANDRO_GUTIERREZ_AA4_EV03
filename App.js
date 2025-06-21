import React from 'react';
import AppRouter from './src/Router/AppRouter';
import Layout from './src/components/Layout/Layout';

/**
 * Componente raíz de la aplicación.
 * Envuelve toda la aplicación con el Layout común y maneja el enrutamiento global.
 */
function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;