import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionar = (produto) => {
    setItens((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const remover = (id) => {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const limpar = () => {
    setItens([]);
  };

  const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0);
  const totalPreco = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        itens,
        adicionar,
        remover,
        limpar,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return ctx;
}