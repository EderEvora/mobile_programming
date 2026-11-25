import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { cores } from '@/constants/tema';

export default function Cartao({ children }: { children: ReactNode }) {
  return <View style={styles.cartao}>{children}</View>;
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: cores.branco,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
});