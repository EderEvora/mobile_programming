import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AddButton({ onPress }) {
  const { tema } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: tema.corPrimaria }]}
      onPress={onPress}
    >
      <Text style={styles.texto}>+ Adicionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  texto: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});