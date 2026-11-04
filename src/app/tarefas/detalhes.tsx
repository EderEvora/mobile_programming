import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTarefas } from '@/context/tarefas';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { tasks } = useTarefas();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Tarefa não encontrada</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">{task.title}</ThemedText>
        <ThemedText>Disciplina: {task.subject}</ThemedText>
        <ThemedText>Descrição: {task.description}</ThemedText>
        <ThemedText>Data de entrega: {task.dueDate}</ThemedText>
        <ThemedText>Estado: {task.completed ? 'Concluída' : 'Pendente'}</ThemedText>
        <Button title="Voltar" onPress={() => router.back()} />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
});