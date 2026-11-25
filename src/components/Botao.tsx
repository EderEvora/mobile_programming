import { Pressable, Text, StyleSheet } from 'react-native';
import { cores } from '@/constants/tema';

type Props = { titulo: string; onPress: () => void; outline?: boolean };

export default function Botao({ titulo, onPress, outline }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.botao, outline && styles.outline]}>
      <Text style={[styles.texto, outline && styles.textoOutline]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: cores.primaria,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: cores.primaria,
  },
  outline: { backgroundColor: cores.branco },
  texto: { color: cores.branco, fontWeight: 'bold' },
  textoOutline: { color: cores.primaria },
});