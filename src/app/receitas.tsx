import { StyleSheet, View } from 'react-native';

import { RecipeCard } from '@/components/recipe-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import recipesData from '@/data/recipes.json';
import type { Recipe } from '@/types/recipe';

const recipes = recipesData as Recipe[];

export default function RecipesScreen() {
  return (
    <Screen
      title="Receitas Afetivas"
      subtitle="Descubra sabores da nossa terra em receitas simples da comunidade.">
      <View style={styles.list}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </View>

      <ThemedView type="backgroundElement" style={styles.memoryCard}>
        <ThemedText type="subtitle" style={styles.memoryTitle} themeColor="primaryDark">
          Qual receita lembra sua familia ou sua comunidade?
        </ThemedText>
        <ThemedText type="small" style={styles.memoryText} themeColor="textSecondary">
          Compartilhe sua historia e ajude a cultivar o livro de receitas coletivo.
        </ThemedText>
        <ThemedView type="primary" style={styles.memoryButton}>
          <ThemedText type="smallBold" style={styles.buttonText}>
            Compartilhar Memoria
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.three,
  },
  memoryCard: {
    borderRadius: 8,
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.four,
  },
  memoryTitle: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
  },
  memoryText: {
    textAlign: 'center',
  },
  memoryButton: {
    borderRadius: 999,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
  },
  buttonText: {
    color: '#FAF8F2',
  },
});
