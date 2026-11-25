import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function CarrinhoScreen() {
  const { itens, adicionar, remover, limpar, totalPreco } = useCart();
  const { tema } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <FlatList
        data={itens}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={[styles.vazio, { color: tema.textoSecundario }]}>
            O carrinho está vazio.
          </Text>
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { backgroundColor: tema.cartao, borderColor: tema.borda },
            ]}
          >
            <View style={styles.itemInfo}>
              <Text style={[styles.nome, { color: tema.texto }]}>
                {item.nome}
              </Text>
              <Text style={[styles.sub, { color: tema.textoSecundario }]}>
                {item.preco} CVE × {item.quantidade} ={' '}
                {item.preco * item.quantidade} CVE
              </Text>
            </View>

            <View style={styles.controles}>
              <TouchableOpacity
                style={[styles.btnQtd, { borderColor: tema.borda }]}
                onPress={() => remover(item.id)}
              >
                <Text style={[styles.txtQtd, { color: tema.texto }]}>-</Text>
              </TouchableOpacity>

              <Text style={[styles.qtd, { color: tema.texto }]}>
                {item.quantidade}
              </Text>

              <TouchableOpacity
                style={[styles.btnQtd, { borderColor: tema.borda }]}
                onPress={() => adicionar(item)}
              >
                <Text style={[styles.txtQtd, { color: tema.texto }]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.lista}
      />

      {itens.length > 0 && (
        <View
          style={[
            styles.rodape,
            { backgroundColor: tema.cartao, borderTopColor: tema.borda },
          ]}
        >
          <Text style={[styles.total, { color: tema.texto }]}>
            Total: {totalPreco} CVE
          </Text>
          <TouchableOpacity style={styles.btnLimpar} onPress={limpar}>
            <Text style={styles.txtLimpar}>Esvaziar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lista: {
    padding: 16,
  },
  vazio: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  nome: {
    fontSize: 15,
    fontWeight: '600',
  },
  sub: {
    fontSize: 13,
    marginTop: 4,
  },
  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  btnQtd: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtQtd: {
    fontSize: 16,
    fontWeight: '700',
  },
  qtd: {
    fontSize: 15,
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },
  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
  },
  total: {
    fontSize: 17,
    fontWeight: '700',
  },
  btnLimpar: {
    backgroundColor: '#DC2626',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  txtLimpar: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});