import React, { createContext, useState } from 'react';

/**
 * Contexto de datos globales.
 * Almacena información compartida entre componentes sin necesidad de prop drilling.
 */
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    preferences: {},
    cart: [],
    // Otros datos globales pueden ir aquí
  });

  /**
   * Actualiza las preferencias del usuario
   * @param {object} prefs - Nuevas preferencias
   */
  const updatePreferences = (prefs) => {
    setAppData(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...prefs }
    }));
  };

  /**
   * Añade un ítem al carrito
   * @param {object} item - Ítem a añadir
   */
  const addToCart = (item) => {
    setAppData(prev => ({
      ...prev,
      cart: [...prev.cart, item]
    }));
  };

  const value = {
    appData,
    updatePreferences,
    addToCart,
    // Otras funciones pueden exponerse aquí
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};