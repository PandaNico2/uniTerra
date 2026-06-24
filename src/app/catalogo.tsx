import { StyleSheet, TextInput, View } from 'react-native';

import { PlantCard } from '@/components/plant-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import plantsData from '@/data/plants.json';
import { useTheme } from '@/hooks/use-theme';
import type { Plant } from '@/types/plant';

const plants = (plantsData as Plant[]).slice(0, 10);
const filters = ['Todas', 'Basicas', 'Temperos e Chas', 'Medicinais', 'PANC'];

export default function PlantCatalogScreen() {
  const theme = useTheme();

  return (
    <Screen title="Catalogo de Plantas">
      <TextInput
        editable={false}
        placeholder="Buscar no catalogo..."
        placeholderTextColor={theme.textSecondary}
        style={[
          styles.search,
          { backgroundColor: '#FFFFFF', borderColor: theme.border, color: theme.text },
        ]}
      />

      <View style={styles.filters}>
        {filters.map((filter, index) => {
          const isActive = index === 0;
          return (
            <ThemedView
              key={filter}
              style={[
                styles.filterButton,
                {
                  backgroundColor: isActive ? theme.primaryDark : theme.backgroundElement,
                  borderColor: isActive ? theme.primaryDark : theme.border,
                },
              ]}>
              <ThemedText type="small" style={isActive && { color: '#FAF8F2', fontWeight: 700 }}>
                {filter}
              </ThemedText>
            </ThemedView>
          );
        })}
      </View>

      <View style={styles.list}>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    minHeight: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  filterButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  list: {
    gap: Spacing.three,
  },
});
