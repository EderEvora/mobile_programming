import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';
import Header from './src/components/Header';
import TabBar from './src/components/TabBar';
import ProdutosScreen from './src/screens/ProdutosScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import PerfilScreen from './src/screens/PerfilScreen';

function AppConteudo() {
  const { tema } = useTheme();
  const [abaAtiva, setAbaAtiva] = useState('produtos');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tema.fundo }]}>
      <Header />
      {abaAtiva === 'produtos' && <ProdutosScreen />}
      {abaAtiva === 'carrinho' && <CarrinhoScreen />}
      {abaAtiva === 'perfil' && <PerfilScreen />}
      <TabBar abaAtiva={abaAtiva} onSelecionarAba={setAbaAtiva} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppConteudo />
      </CartProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});