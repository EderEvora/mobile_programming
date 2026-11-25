import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function PerfilScreen() {
  const { modo, tema, alternarTema } = useTheme();
  const { usuario, login, logout } = useAuth();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    login(nome, email);
    setNome('');
    setEmail('');
  };

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View
        style={[
          styles.cartao,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={[styles.titulo, { color: tema.texto }]}>Preferências</Text>
        <View style={styles.linha}>
          <Text style={[styles.texto, { color: tema.texto }]}>Modo escuro</Text>
          <Switch
            value={modo === 'escuro'}
            onValueChange={alternarTema}
            trackColor={{ false: tema.borda, true: tema.corPrimaria }}
          />
        </View>
      </View>

      <View
        style={[
          styles.cartao,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={[styles.titulo, { color: tema.texto }]}>Conta</Text>

        {usuario ? (
          <>
            <Text style={[styles.texto, { color: tema.texto }]}>
              Nome: {usuario.nome}
            </Text>
            <Text style={[styles.sub, { color: tema.textoSecundario }]}>
              Email: {usuario.email}
            </Text>

            <TouchableOpacity style={styles.btnSair} onPress={logout}>
              <Text style={styles.btnTexto}>Terminar sessão</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[styles.sub, { color: tema.textoSecundario }]}>
              Sessão terminada. Inicia sessão para aceder à tua conta.
            </Text>

            <TextInput
              placeholder="Nome"
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

            <TextInput
              placeholder="Email"
              placeholderTextColor={tema.textoSecundario}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
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
              style={[styles.btnEntrar, { backgroundColor: tema.corPrimaria }]}
              onPress={handleLogin}
            >
              <Text style={styles.btnTexto}>Iniciar sessão</Text>
            </TouchableOpacity>
          </>
        )}
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
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  texto: {
    fontSize: 15,
    fontWeight: '500',
  },
  sub: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  btnEntrar: {
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  btnSair: {
    backgroundColor: '#DC2626',
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  btnTexto: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});