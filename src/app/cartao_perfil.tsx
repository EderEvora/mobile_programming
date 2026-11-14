import { View, Text, Image, StyleSheet } from 'react-native';
import Botao from '@/components/Botao';
import Cartao from '@/components/Cartao';
import { cores } from '@/constants/tema';

export default function CartaoPerfil() {
  return (
    <View style={styles.container}>
      {/* Etapa 1: cabeçalho */}
      <View style={styles.cabecalho} />

      {/* Etapa 2: foto e textos */}
      <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.foto} />
      <Text style={styles.nome}>Éder</Text>
      <Text style={styles.bio}>Estudante de Engenharia Informática</Text>

      {/* Etapas 3 e 4: estatísticas dentro do cartão */}
      <Cartao>
        <View style={styles.estatisticas}>
          <View style={styles.item}>
            <Text style={styles.numero}>120</Text>
            <Text style={styles.legenda}>Publicações</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.numero}>1.5k</Text>
            <Text style={styles.legenda}>Seguidores</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.numero}>300</Text>
            <Text style={styles.legenda}>A seguir</Text>
          </View>
        </View>
      </Cartao>

      {/* Etapa 4: botões lado a lado */}
      <View style={styles.botoes}>
        <Botao titulo="Seguir" onPress={() => {}} />
        <Botao titulo="Mensagem" outline onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  cabecalho: { height: 160, backgroundColor: cores.primaria },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: cores.branco,
    marginTop: -60,
    alignSelf: 'center',
  },
  nome: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: cores.texto },
  bio: { fontSize: 14, textAlign: 'center', color: cores.suave, marginTop: 4 },
  estatisticas: { flexDirection: 'row', justifyContent: 'space-around' },
  item: { alignItems: 'center' },
  numero: { fontSize: 18, fontWeight: 'bold', color: cores.texto },
  legenda: { fontSize: 12, color: cores.suave },
  botoes: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginTop: 24 },
});