import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre' }} />
      <Tabs.Screen name="lista" options={{ title: 'Lista' }} />
    </Tabs>
  );
}