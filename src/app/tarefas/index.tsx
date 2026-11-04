import { useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTarefas } from '@/context/tarefas';

type Filtro = 'todas' | 'pendentes' | 'concluidas';

export default function HomeScreen() {
  const router = useRouter();
  const { tasks, toggleTask, deleteTask } = useTarefas();
  const [filtro, setFiltro] = useState<Filtro>('todas');

  const concluidas = tasks.filter((t) => t.completed).length;
  const pendentes = tasks.length - concluidas;

  const lista =
    filtro === 'concluidas'
      ? tasks.filter((t) => t.completed)
      : filtro === 'pendentes'
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText>
          Pendentes: {pendentes} | Concluídas: {concluidas}
        </ThemedText>

        <ThemedView style={styles.linha}>
          <Pressable onPress={() => setFiltro('todas')}>
            <ThemedText style={filtro === 'todas' && styles.ativo}>Todas</ThemedText>
          </Pressable>
          <Pressable onPress={() => setFiltro('pendentes')}>
            <ThemedText style={filtro === 'pendentes' && styles.ativo}>Pendentes</ThemedText>
          </Pressable>
          <Pressable onPress={() => setFiltro('concluidas')}>
            <ThemedText style={filtro === 'concluidas' && styles.ativo}>Concluídas</ThemedText>
          </Pressable>
        </ThemedView>

        <Pressable style={styles.botaoNova} onPress={() => router.push('/tarefas/nova')}>
          <ThemedText style={styles.textoBotao}>+ Nova tarefa</ThemedText>
        </Pressable>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<ThemedText>Nenhuma tarefa encontrada</ThemedText>}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push({ pathname: '/tarefas/detalhes', params: { id: item.id } })}>
              <ThemedView
                type="backgroundElement"
                style={[styles.item, item.completed && styles.itemConcluido]}>
                <ThemedText
                  type="subtitle"
                  style={item.completed && styles.riscado}>
                  {item.title}
                </ThemedText>
                <ThemedText>{item.subject}</ThemedText>
                <ThemedText>Estado: {item.completed ? 'Concluída' : 'Pendente'}</ThemedText>

                <ThemedView style={styles.linha}>
                  <Pressable onPress={() => toggleTask(item.id)}>
                    <ThemedText style={styles.concluir}>
                      {item.completed ? 'Reabrir' : 'Concluir'}
                    </ThemedText>
                  </Pressable>
                  <Pressable onPress={() => deleteTask(item.id)}>
                    <ThemedText style={styles.eliminar}>Eliminar</ThemedText>
                  </Pressable>
                </ThemedView>
              </ThemedView>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
  linha: { flexDirection: 'row', gap: Spacing.three, backgroundColor: 'transparent' },
  ativo: { fontWeight: 'bold', textDecorationLine: 'underline' },
  botaoNova: {
    backgroundColor: '#208AEF',
    padding: Spacing.three,
    borderRadius: Spacing.two,
    alignItems: 'center',
  },
  textoBotao: { color: '#fff' },
  item: { padding: Spacing.three, marginBottom: Spacing.two, borderRadius: Spacing.three, gap: Spacing.one },
  itemConcluido: { opacity: 0.6 },
  riscado: { textDecorationLine: 'line-through' },
  concluir: { color: 'green' },
  eliminar: { color: 'red' },
});