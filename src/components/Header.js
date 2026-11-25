import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { modo, tema, alternarTema } = useTheme();
  const { totalItens } = useCart();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: tema.cartao, borderBottomColor: tema.borda },
      ]}
    >
      <Text style={[styles.titulo, { color: tema.texto }]}>Loja Mobile</Text>

      <View style={styles.direita}>
        <Text style={[styles.contador, { color: tema.texto }]}>
          🛒 {totalItens}
        </Text>
        <TouchableOpacity
          onPress={alternarTema}
          style={[styles.botao, { borderColor: tema.borda }]}
        >
          <Text style={[styles.icone, { color: tema.texto }]}>
            {modo === 'claro' ? '🌙' : '☀️'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
  },
  direita: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contador: {
    fontSize: 15,
    fontWeight: '600',
  },
  botao: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  icone: {
    fontSize: 16,
  },
});