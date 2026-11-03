import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type Item = { id: string; nome: string };

export default function ListaScreen() {
  const [texto, setTexto] = useState('');
  const [nomes, setNomes] = useState<Item[]>([]);

  function adicionar() {
    const nome = texto.trim();
    if (nome === '') return; // validação: vazio ou só espaços
    setNomes([...nomes, { id: Date.now().toString(), nome }]);
    setTexto('');
  }

  function remover(id: string) {
    setNomes(nomes.filter((item) => item.id !== id));
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.linha}>
          <TextInput
            style={styles.input}
            placeholder="Escreve um nome..."
            placeholderTextColor="#888"
            value={texto}
            onChangeText={setTexto}
          />
          <Pressable style={styles.botaoAdd} onPress={adicionar}>
            <ThemedText style={styles.textoBotao}>Adicionar</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedText type="subtitle">
          Total: {nomes.length} {nomes.length === 1 ? 'nome' : 'nomes'}
        </ThemedText>

        <FlatList
          data={nomes}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<ThemedText>Nenhum nome adicionado</ThemedText>}
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.item}>
              <ThemedText>{item.nome}</ThemedText>
              <Pressable onPress={() => remover(item.id)}>
                <ThemedText style={styles.remover}>Remover</ThemedText>
              </Pressable>
            </ThemedView>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
  linha: { flexDirection: 'row', gap: Spacing.two },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  botaoAdd: {
    backgroundColor: '#208AEF',
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
    borderRadius: Spacing.two,
  },
  textoBotao: { color: '#fff' },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.three,
    marginBottom: Spacing.two,
    borderRadius: Spacing.three,
  },
  remover: { color: 'red' },
});