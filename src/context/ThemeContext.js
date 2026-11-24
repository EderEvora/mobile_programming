import React, { createContext, useContext, useState } from 'react';

const TEMAS = {
  claro: {
    modo: 'claro',
    fundo: '#F4F6F9',
    cartao: '#FFFFFF',
    texto: '#111827',
    textoSecundario: '#6B7280',
    corPrimaria: '#2563EB',
    borda: '#E5E7EB',
  },
  escuro: {
    modo: 'escuro',
    fundo: '#111827',
    cartao: '#1F2937',
    texto: '#F9FAFB',
    textoSecundario: '#9CA3AF',
    corPrimaria: '#3B82F6',
    borda: '#374151',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [modo, setModo] = useState('claro');

  const alternarTema = () => {
    setModo((prev) => (prev === 'claro' ? 'escuro' : 'claro'));
  };

  const tema = TEMAS[modo];

  return (
    <ThemeContext.Provider value={{ modo, tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return ctx;
}