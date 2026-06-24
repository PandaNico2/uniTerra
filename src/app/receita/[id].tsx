import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { BlankImage } from '@/components/blank-image';
import { CategoryBadge } from '@/components/category-badge';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getRecipeImage } from '@/data/recipeImages';
import recipesData from '@/data/recipes.json';
import type { Recipe } from '@/types/recipe';

const recipes = recipesData as Recipe[];

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = recipes.find((item) => item.id === id) ?? recipes[0];

  return (
    <Screen>
      <BlankImage
        aspectRatio={2.2}
        source={getRecipeImage(recipe.imageKey)}
        style={styles.heroImage}
      />

      <View style={styles.header}>
        <CategoryBadge label={recipe.category} tone="rose" />
        <ThemedText type="subtitle">{recipe.title}</ThemedText>
        <ThemedText themeColor="textSecondary">{recipe.description}</ThemedText>
        {recipe.time && (
          <ThemedText type="smallBold" themeColor="primaryDark">
            Tempo de preparo: {recipe.time}
          </ThemedText>
        )}
      </View>

      <ThemedView style={styles.section}>
        <ThemedText type="default">Ingredientes</ThemedText>
        {recipe.ingredients.map((ingredient) => (
          <ThemedText key={ingredient} type="small" themeColor="textSecondary">
            - {ingredient}
          </ThemedText>
        ))}
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="default">Modo de preparo</ThemedText>
        {recipe.preparation.map((step, index) => (
          <ThemedText key={step} type="small" themeColor="textSecondary">
            {index + 1}. {step}
          </ThemedText>
        ))}
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    borderRadius: 8,
  },
  header: {
    gap: Spacing.two,
  },
  section: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    gap: Spacing.two,
    padding: Spacing.four,
  },
});
