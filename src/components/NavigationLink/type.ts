import { CategoriesNames } from '@Types/route';

type NavigationLink = {
  category: 'main' | 'middle';
  isSelected: boolean;
  name: CategoriesNames;
  path: string;
};

export type { NavigationLink };
