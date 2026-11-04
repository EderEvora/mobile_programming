import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTarefas } from '@/context/tarefas';

export default function AddTaskScreen() {
  const router = useRouter();
  const { addTask } = useTarefas();

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [erro, setErro] = useState('');

  function guardar() {
    if (title.trim() === '' || subject.trim() === '') {
      setErro('Título e disciplina são obrigatórios');
      return;
    }
    addTask({
      title: title.trim(),
      subject: subject.trim(),
      description: description.trim(),
      dueDate: dueDate.trim(),
    });
    router.back();
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TextInput style={styles.input} placeholder="Título *" placeholderTextColor="#888"
          value={title} onChangeText={setTitle} />
        <TextInput style={styles.input} placeholder="Disciplina *" placeholderTextColor="#888"
          value={subject} onChangeText={setSubject} />
        <TextInput style={styles.input} placeholder="Descrição" placeholderTextColor="#888"
          value={description} onChangeText={setDescription} />
        <TextInput style={styles.input} placeholder="Data de entrega (dd/mm/aaaa)" placeholderTextColor="#888"
          value={dueDate} onChangeText={setDueDate} />

        {erro !== '' && <ThemedText style={styles.erro}>{erro}</ThemedText>}

        <Button title="Guardar" onPress={guardar} />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: Spacing.two,
    padding: Spacing.three,
  },
  erro: { color: 'red' },
});