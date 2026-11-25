import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { TarefasProvider } from '@/context/tarefas';

import React from 'react';
import App from '../../App';

export default function RootLayout() {
  return <App />;
}