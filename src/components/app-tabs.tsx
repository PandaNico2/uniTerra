import { Tabs } from 'expo-router';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import { useColorScheme, type ColorValue } from 'react-native';

import { Colors } from '@/constants/theme';

type TabIconName = SymbolViewProps['name'];

function TabIcon({ name, color }: { name: TabIconName; color: ColorValue }) {
  return <SymbolView name={name} tintColor={String(color)} size={24} />;
}

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          minHeight: 72,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <TabIcon name={{ ios: 'house', android: 'home', web: 'home' }} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: 'Catalogo',
          tabBarIcon: ({ color }) => (
            <TabIcon name={{ ios: 'book', android: 'menu_book', web: 'menu_book' }} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="horta"
        options={{
          title: 'Minha Horta',
          tabBarIcon: ({ color }) => (
            <TabIcon
              name={{ ios: 'leaf', android: 'local_florist', web: 'local_florist' }}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="receitas"
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => (
            <TabIcon
              name={{ ios: 'fork.knife', android: 'restaurant_menu', web: 'restaurant_menu' }}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name="planta/[id]" options={{ href: null }} />
      <Tabs.Screen name="receita/[id]" options={{ href: null }} />
    </Tabs>
  );
}
