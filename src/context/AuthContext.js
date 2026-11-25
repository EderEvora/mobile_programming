import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const UTILIZADOR_INICIAL = {
  nome: 'Éder Evora',
  email: 'eder@mobile-store.cv',
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(UTILIZADOR_INICIAL);

  const login = (nome, email) => {
    const nomeLimpo = nome?.trim() || 'Utilizador';
    const emailLimpo = email?.trim() || 'utilizador@mobile-store.cv';
    setUsuario({ nome: nomeLimpo, email: emailLimpo });
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return ctx;
}