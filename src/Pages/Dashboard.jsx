import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * Página privada del dashboard.
 * Solo accesible para usuarios autenticados.
 */
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Bienvenido, {currentUser.name}</h2>
        <p className="text-gray-600">Email: {currentUser.email}</p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Estadísticas</h3>
            <p className="text-gray-700">Aquí irían tus estadísticas...</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Actividad Reciente</h3>
            <p className="text-gray-700">Aquí iría tu actividad reciente...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;