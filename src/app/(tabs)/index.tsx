import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { cursos } from '@/constants/dados';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Universidade Explorer</ThemedText>

        {cursos.map((curso) => (
          <Pressable onPress={() => router.push('/tarefas')}>
            <ThemedView type="backgroundElement" style={styles.item}>
            <ThemedText>Gestão de Tarefas →</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
  item: { padding: Spacing.three, borderRadius: Spacing.three },
});