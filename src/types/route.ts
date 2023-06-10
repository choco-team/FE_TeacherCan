import {
  MAIN_CATEGORY_NAMES,
  MIDDLE_CATEGORY_NAMES,
} from '@Constant/routePath';

type MainCategory = {
  type: 'main';
  name: MainCategoriesNames;
  path: string;
  children: Readonly<MiddleCategoriesNames[]>;
};

type MiddleCategory = {
  type: 'middle';
  name: MiddleCategoriesNames;
  path: string;
};

type MainCategoriesNames = (typeof MAIN_CATEGORY_NAMES)[number];

type MiddleCategoriesNames = (typeof MIDDLE_CATEGORY_NAMES)[number];

type CategoriesNames = MainCategoriesNames | MiddleCategoriesNames;

type Categories = Record<CategoriesNames, MainCategory | MiddleCategory>;

export type { Categories, CategoriesNames };
