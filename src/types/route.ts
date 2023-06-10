import { IconType } from 'react-icons';

import {
  MAIN_CATEGORY_NAMES,
  MIDDLE_CATEGORY_NAMES,
} from '@Constant/routePath';

type MainCategory = {
  category: 'main';
  name: string;
  path: string;
  children: Readonly<MiddleCategoriesNames[]>;
};

type MiddleCategory = {
  category: 'middle';
  name: string;
  path: string;
  Icon: IconType;
};

type MainCategoriesNames = (typeof MAIN_CATEGORY_NAMES)[number];

type MiddleCategoriesNames = (typeof MIDDLE_CATEGORY_NAMES)[number];

type CategoriesNames = MainCategoriesNames | MiddleCategoriesNames;

type Categories = Record<CategoriesNames, MainCategory | MiddleCategory>;

export type { Categories, CategoriesNames };
