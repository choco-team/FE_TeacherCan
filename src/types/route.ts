import { IconType } from 'react-icons';

import {
  MAIN_CATEGORY_NAMES,
  MIDDLE_CATEGORY_NAMES,
} from '@Constant/routePath';

type MainCategory = {
  key: MainCategoriesNames;
  category: 'main';
  name: string;
  path: string;
  children: MiddleCategoriesNames[];
};

type MiddleCategory = {
  key: MiddleCategoriesNames;
  category: 'middle';
  name: string;
  path: string;
  Icon: IconType;
};

type MainCategoriesNames = (typeof MAIN_CATEGORY_NAMES)[number];

type MiddleCategoriesNames = (typeof MIDDLE_CATEGORY_NAMES)[number];

type CategoriesNames = MainCategoriesNames | MiddleCategoriesNames;

type Categories = Array<MainCategory | MiddleCategory>;

export type { Categories, CategoriesNames, MiddleCategory };
