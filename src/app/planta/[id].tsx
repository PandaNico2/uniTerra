import type { ComponentProps, ReactNode } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { BlankImage } from '@/components/blank-image';
import { CategoryBadge } from '@/components/category-badge';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPlantImage } from '@/data/plantImages';
import plantsData from '@/data/plants.json';
import { useTheme } from '@/hooks/use-theme';
import type { Plant } from '@/types/plant';

const plants = plantsData as Plant[];

export default function PlantDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const plant = plants.find((item) => item.id === id) ?? plants[0];

  return (
    <Screen bottomInset={false} horizontalPadding={false}>
      <ThemedView style={styles.hero}>
        <BlankImage
          source={getPlantImage(plant.imageKey)}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <CategoryBadge label={plant.categories[0] ?? 'planta'} />
          <ThemedText type="subtitle">{plant.popularName}</ThemedText>
        </View>
      </ThemedView>

      <View style={styles.content}>
        <View style={styles.quickInfo}>
          <InfoPill icon={{ ios: 'sun.max', android: 'wb_sunny', web: 'wb_sunny' }} label={plant.cultivation.sunlight} />
          <InfoPill icon={{ ios: 'drop', android: 'water_drop', web: 'water_drop' }} label={plant.cultivation.soil} />
          <InfoPill icon={{ ios: 'cross.case', android: 'medical_services', web: 'medical_services' }} label={plant.categories[0] ?? 'Planta'} />
        </View>

        <InfoSection title="Para que serve" icon={{ ios: 'shield.lefthalf.filled', android: 'health_and_safety', web: 'health_and_safety' }}>
          <ThemedText>{plant.description}</ThemedText>
        </InfoSection>

        <ThemedView type="backgroundElement" style={styles.careSection}>
          <View style={styles.sectionTitle}>
            <SymbolView
              name={{ ios: 'leaf', android: 'local_florist', web: 'local_florist' }}
              tintColor={theme.primaryDark}
              size={24}
            />
            <ThemedText type="default" themeColor="primaryDark">
              Como cuidar
            </ThemedText>
          </View>
          {[plant.cultivation.sunlight, plant.cultivation.watering, plant.cultivation.plantingSeason].map(
            (item) => (
              <View key={item} style={styles.careItem}>
                <SymbolView
                  name={{ ios: 'checkmark.circle', android: 'check_circle', web: 'check_circle' }}
                  tintColor={theme.primaryDark}
                  size={20}
                />
                <ThemedText type="small">{item}</ThemedText>
              </View>
            ),
          )}
        </ThemedView>

        <InfoSection title="Uso na cozinha" icon={{ ios: 'fork.knife', android: 'restaurant', web: 'restaurant' }}>
          <View style={styles.usesGrid}>
            {plant.uses.map((use) => (
              <ThemedView key={use} type="backgroundElement" style={styles.useItem}>
                <ThemedText type="smallBold">{use}</ThemedText>
              </ThemedView>
            ))}
          </View>
        </InfoSection>

        <ThemedView type="backgroundElement" style={styles.difficultyCard}>
          <View style={styles.difficultyRow}>
            <ThemedText type="small">Dificuldade de Cultivo</ThemedText>
            <ThemedText type="smallBold">{plant.cultivation.difficulty}</ThemedText>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { backgroundColor: theme.primary }]} />
          </View>
        </ThemedView>

        <ThemedView type="terracotta" style={styles.addButton}>
          <ThemedText type="default" style={styles.addButtonText}>
            Adicionar a Minha Horta
          </ThemedText>
        </ThemedView>
      </View>
    </Screen>
  );
}

type SymbolName = ComponentProps<typeof SymbolView>['name'];

function InfoPill({ icon, label }: { icon: SymbolName; label: string }) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.infoPill}>
      <SymbolView name={icon} tintColor={theme.primaryDark} size={18} />
      <ThemedText type="small">{label}</ThemedText>
    </ThemedView>
  );
}

function InfoSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: SymbolName;
  children: ReactNode;
}) {
  const theme = useTheme();

  return (
    <ThemedView style={styles.infoSection}>
      <View style={styles.sectionTitle}>
        <SymbolView name={icon} tintColor={theme.primaryDark} size={24} />
        <ThemedText type="default">{title}</ThemedText>
      </View>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 0,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 300,
    maxHeight: 300,
    borderWidth: 0,
    borderRadius: 0,
  },
  heroOverlay: {
    gap: Spacing.two,
    padding: Spacing.three,
  },
  content: {
    gap: Spacing.four,
    paddingHorizontal: Spacing.three,
  },
  quickInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  infoPill: {
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  infoSection: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    gap: Spacing.three,
    padding: Spacing.four,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  careSection: {
    borderRadius: 8,
    gap: Spacing.three,
    padding: Spacing.four,
  },
  careItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  usesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  useItem: {
    width: '47%',
    minHeight: 76,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.two,
  },
  difficultyCard: {
    borderRadius: 8,
    gap: Spacing.three,
    padding: Spacing.three,
  },
  difficultyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#E4DED4',
    overflow: 'hidden',
  },
  progressBar: {
    width: '45%',
    height: '100%',
    borderRadius: 999,
  },
  addButton: {
    borderRadius: 8,
    alignItems: 'center',
    padding: Spacing.three,
  },
  addButtonText: {
    color: '#FAF8F2',
    fontWeight: 700,
  },
});
