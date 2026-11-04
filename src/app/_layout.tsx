import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerBackTitle: 'Voltar' }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="curso" options={{ title: 'Curso' }} />
        <Stack.Screen name="estudantes" options={{ title: 'Estudantes' }} />
        <Stack.Screen name="perfil" options={{ title: 'Perfil' }} />
      </Stack>
    </ThemeProvider>
  );
}