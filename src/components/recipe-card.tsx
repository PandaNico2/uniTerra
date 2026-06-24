import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { BlankImage } from '@/components/blank-image';
import { CategoryBadge } from '@/components/category-badge';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getRecipeImage } from '@/data/recipeImages';
import type { Recipe } from '@/types/recipe';

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/receita/${recipe.id}`} asChild>
      <Pressable style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
        <ThemedView style={styles.card}>
          <BlankImage
            aspectRatio={2.35}
            source={getRecipeImage(recipe.imageKey)}
            style={styles.image}
          />
          <View style={styles.body}>
            <CategoryBadge label={recipe.category} tone="rose" />
            <ThemedText type="default">{recipe.title}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {recipe.description}
            </ThemedText>
            {recipe.time && (
              <ThemedText type="code" themeColor="textSecondary">
                {recipe.time}
              </ThemedText>
            )}
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
