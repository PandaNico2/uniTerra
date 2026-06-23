export type Recipe = {
  id: string;
  title: string;
  category: string;
  description: string;
  plantIds: string[];
  ingredients: string[];
  preparation: string[];
  time?: string;
  imageKey: string;
};
