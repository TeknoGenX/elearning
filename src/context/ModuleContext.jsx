import React, { createContext, useState, useContext } from 'react';
import { modules as initialModules } from '../data/modules'; // Mengambil data awal

const ModuleContext = createContext(null);

export function ModuleProvider({ children }) {
  const [modules, setModules] = useState(initialModules);

  const addModule = (newModule) => {
    // Di aplikasi nyata, ini akan mengirim data ke server
    const moduleWithId = { ...newModule, id: `modul-${Date.now()}` }; // Buat ID unik sederhana
    setModules([...modules, moduleWithId]);
  };

  const updateModule = (moduleId, updatedData) => {
    setModules(modules.map(m => (m.id === moduleId ? { ...m, ...updatedData } : m)));
  };

  const getModuleById = (id) => {
    return modules.find(m => m.id === id);
  };

  const value = {
    modules,
    getModuleById,
    addModule,
    updateModule,
  };

  return <ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>;
}

export function useModules() {
  return useContext(ModuleContext);
}