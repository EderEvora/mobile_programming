import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { estudantes } from '@/constants/dados';

export default function StudentsScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Estudantes</ThemedText>

        {estudantes.map((nome) => (
          <Pressable
            key={nome}
            onPress={() => router.push({ pathname: '/perfil', params: { nome } })}>
            <ThemedView type="backgroundElement" style={styles.item}>
              <ThemedText>{nome}</ThemedText>
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