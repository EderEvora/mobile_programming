import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { PRODUTOS } from '../data/produtos';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';

export default function ProdutosScreen() {
  const { tema } = useTheme();
  const [contadorLocal, setContadorLocal] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View
        style={[
          styles.localBox,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={[styles.localTexto, { color: tema.texto }]}>
          Estado local: {contadorLocal}
        </Text>
        <TouchableOpacity
          style={[styles.btnLocal, { backgroundColor: tema.corPrimaria }]}
          onPress={() => setContadorLocal((c) => c + 1)}
        >
          <Text style={styles.btnLocalTexto}>+1</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductCard produto={item} />}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  localBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    marginBottom: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  localTexto: {
    fontSize: 14,
    fontWeight: '600',
  },
  btnLocal: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  btnLocalTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  lista: {
    padding: 16,
    paddingTop: 8,
  },
});