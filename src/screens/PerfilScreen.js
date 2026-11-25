import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function PerfilScreen() {
  const { modo, tema, alternarTema } = useTheme();
  const [nome, setNome] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View
        style={[
          styles.cartao,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={[styles.titulo, { color: tema.texto }]}>Perfil</Text>
        <TextInput
          placeholder="O teu nome"
          placeholderTextColor={tema.textoSecundario}
          value={nome}
          onChangeText={setNome}
          style={[
            styles.input,
            {
              color: tema.texto,
              borderColor: tema.borda,
              backgroundColor: tema.fundo,
            },
          ]}
        />
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: tema.corPrimaria }]}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.cartao,
          styles.switchRow,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={[styles.tituloSwitch, { color: tema.texto }]}>
          Modo escuro
        </Text>
        <Switch value={modo === 'escuro'} onValueChange={alternarTema} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartao: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 14,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 10,
  },
  botao: {
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloSwitch: {
    fontSize: 16,
    fontWeight: '600',
  },
});