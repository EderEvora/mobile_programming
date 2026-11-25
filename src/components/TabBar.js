import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function TabBar({ abaAtiva, onSelecionarAba }) {
  const { tema } = useTheme();

  const abas = [
    { key: 'produtos', label: 'Produtos' },
    { key: 'carrinho', label: 'Carrinho' },
    { key: 'perfil', label: 'Perfil' },
  ];

  return (
    <View
      style={[
        styles.tabBar,
        { backgroundColor: tema.cartao, borderTopColor: tema.borda },
      ]}
    >
      {abas.map((aba) => {
        const ativa = abaAtiva === aba.key;
        return (
          <TouchableOpacity
            key={aba.key}
            style={styles.tab}
            onPress={() => onSelecionarAba(aba.key)}
          >
            <Text
              style={[
                styles.label,
                {
                  color: ativa ? tema.corPrimaria : tema.textoSecundario,
                  fontWeight: ativa ? '700' : '500',
                },
              ]}
            >
              {aba.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
  },
});