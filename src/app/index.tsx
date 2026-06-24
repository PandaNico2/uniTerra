import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import { BlankImage } from '@/components/blank-image';
import { CategoryBadge } from '@/components/category-badge';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPlantImage } from '@/data/plantImages';
import { useTheme } from '@/hooks/use-theme';

type Shortcut = {
  title: string;
  description: string;
  href: '/catalogo' | '/horta' | '/receitas';
  icon: SymbolViewProps['name'];
  featured?: boolean;
};

const shortcuts: Shortcut[] = [
  {
    title: 'Conhecer Plantas',
    description: 'Explore nosso catalogo botanico',
    href: '/catalogo',
    icon: { ios: 'leaf', android: 'local_florist', web: 'local_florist' },
  },
  {
    title: 'Minha Horta',
    description: 'Gerencie seus plantios ativos',
    href: '/horta',
    icon: { ios: 'tray.full', android: 'yard', web: 'yard' },
  },
  {
    title: 'Receitas Afetivas',
    description: 'Segredos da nossa comunidade',
    href: '/receitas',
    icon: { ios: 'fork.knife', android: 'restaurant_menu', web: 'restaurant_menu' },
    featured: true,
  },
];

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Screen>
      <ThemedView type="backgroundElement" style={styles.hero}>
        <ThemedText type="subtitle" style={styles.centerText}>
          Horta dos Afetos
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={styles.heroText}>
          Aprenda sobre plantas, cuide da sua horta e descubra receitas afetivas da comunidade.
        </ThemedText>
        <BlankImage source={getPlantImage('hortela-comum')} style={styles.heroImage} />
      </ThemedView>

      <View style={styles.shortcuts}>
        {shortcuts.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
              <ThemedView
                style={[
                  styles.shortcutCard,
                  item.featured && { backgroundColor: theme.terracotta, borderColor: theme.terracotta },
                ]}>
                <ThemedView
                  style={[
                    styles.shortcutIcon,
                    { backgroundColor: item.featured ? '#FFB09B' : theme.primaryLight },
                  ]}>
                  <SymbolView
                    name={item.icon}
                    tintColor={item.featured ? '#FAF8F2' : theme.primaryDark}
                    size={24}
                  />
                </ThemedView>
                <View style={styles.shortcutCopy}>
                  <ThemedText
                    type="default"
                    style={item.featured && { color: '#FAF8F2', fontWeight: 700 }}>
                    {item.title}
                  </ThemedText>
                  <ThemedText
                    type="small"
                    style={item.featured && { color: '#FAF8F2' }}
                    themeColor={item.featured ? undefined : 'textSecondary'}>
                    {item.description}
                  </ThemedText>
                </View>
                <ThemedText style={item.featured && { color: '#FAF8F2' }}>{'>'}</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        ))}
      </View>

      <View style={styles.section}>
        <ThemedText type="default">Destaque do Dia</ThemedText>
        <ThemedView style={styles.featuredCard}>
          <BlankImage
            source={getPlantImage('hortela-comum')}
            style={styles.featuredImage}
          />
          <View style={styles.featuredBody}>
            <CategoryBadge label="Medicinal" />
            <ThemedText type="default">Cha de Hortela da Vo</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Descubra como cultivar e preparar uma infusao simples para momentos de calma.
            </ThemedText>
          </View>
        </ThemedView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 'auto',
    borderRadius: 8,
    gap: Spacing.three,
    padding: Spacing.four,
  },
  centerText: {
    textAlign: 'center',
  },
  heroText: {
    textAlign: 'center',
  },
  heroImage: {
    width: '86%',
    maxWidth: 320,
    alignSelf: 'center',
    borderRadius: 8,
    height: 200,
  },
  shortcuts: {
    gap: Spacing.three,
  },
  shortcutCard: {
    minHeight: 104,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
  },
  shortcutIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortcutCopy: {
    flex: 1,
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.75,
  },
  section: {
    gap: Spacing.three,
  },
  featuredCard: {
    height: 'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    overflow: 'hidden',
  },
  featuredImage: {
    borderWidth: 0,
    borderRadius: 0,
    height: 200,
  },
  featuredBody: {
    gap: Spacing.two,
    padding: Spacing.three,
  },
});
