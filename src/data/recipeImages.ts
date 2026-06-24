import type { ImageSourcePropType } from 'react-native';

export const recipeImages: Record<string, ImageSourcePropType> = {
  'batata-doce-alecrim': require('@/assets/receitas/batata_doce_e_alecrim.png'),
  'cha-de-hortela': require('@/assets/receitas/cha_de_hortela.png'),
  'pesto-ora-pro-nobis': require('@/assets/receitas/pesto_ora_pro_nobis.png'),
  'suco-de-hibisco-capim-limao': require('@/assets/receitas/suco_de_hibisco_capin_e_limao.png'),
};

export function getRecipeImage(imageKey: string) {
  return recipeImages[imageKey];
}
