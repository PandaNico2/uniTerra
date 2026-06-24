import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { BlankImage } from '@/components/blank-image';
import { CategoryBadge } from '@/components/category-badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPlantImage } from '@/data/plantImages';
import type { Plant } from '@/types/plant';

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/planta/${plant.id}`} asChild>
      <Pressable style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
        <ThemedView style={styles.card}>
          <BlankImage
            aspectRatio={2.35}
            source={getPlantImage(plant.imageKey)}
            style={styles.image}
          />
          <View style={styles.body}>
            <CategoryBadge label={plant.categories[0] ?? 'planta'} />
            <ThemedText type="default">{plant.popularName}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {plant.description}
            </ThemedText>
          </View>
        </ThemedView>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
  },
  pressed: {
    opacity: 0.75,
  },
  card: {
    height: 'auto',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E4DED4',
  },
  image: {
    borderWidth: 0,
    borderRadius: 0,
    height: 200,
  },
  body: {
    gap: Spacing.two,
    padding: Spacing.three,
  },
});
