import { Button } from 'react-native';
import { Stack, router } from 'expo-router';

export default function TarefasLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tarefas',
          headerLeft: () => <Button title="Início" onPress={() => router.back()} />,
        }}
      />
      <Stack.Screen name="detalhes" options={{ title: 'Detalhes' }} />
      <Stack.Screen name="nova" options={{ title: 'Nova tarefa' }} />
    </Stack>
  );
}