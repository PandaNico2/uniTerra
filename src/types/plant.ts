export type PlantCategory = 'medicinal' | 'aromatica' | 'culinaria' | 'panc';

export type PlantCultivation = {
  watering: string;
  sunlight: string;
  soil: string;
  plantingSeason: string;
  difficulty: string;
};

export type Plant = {
  id: string;
  popularName: string;
  scientificName?: string;
  categories: PlantCategory[];
  description: string;
  cultivation: PlantCultivation;
  uses: string[];
  validated: boolean;
  imageKey: string;
};
