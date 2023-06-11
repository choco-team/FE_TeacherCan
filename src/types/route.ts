import { IconType } from 'react-icons';

import { MAIN_CATEGORIES, MIDDLE_CATEGORIES } from '@Constant/routePath';

import { ArrTransform } from './utils';

type MainCategoriesNames = ArrTransform<typeof MAIN_CATEGORIES, 'name'>[number];
type MiddleCategoriesNames = ArrTransform<
  typeof MIDDLE_CATEGORIES,
  'name'
>[number];

type MainCategoriesPaths = ArrTransform<typeof MAIN_CATEGORIES, 'path'>[number];
type MiddleCategoriesPaths = ArrTransform<
  typeof MIDDLE_CATEGORIES,
  'path'
>[number];

type Path =
  | ''
  | 'auth'
  | 'signin'
  | 'signup'
  | MainCategoriesPaths
  | MiddleCategoriesPaths;

type MainCategory = {
  key: MainCategoriesNames;
  category: 'main';
  name: string;
  path: MainCategoriesPaths;
  children: MiddleCategoriesNames[];
};

type MiddleCategory = {
  key: MiddleCategoriesNames;
  category: 'middle';
  name: string;
  path: MiddleCategoriesPaths;
  Icon: IconType;
};

type Categories = Array<MainCategory | MiddleCategory>;

type MainCategoriesRoutePath = {
  [K in (typeof MAIN_CATEGORIES)[number]['name']]: (typeof MAIN_CATEGORIES)[number]['path'];
};

type MiddleCategoriesRoutePath = {
  [K in (typeof MIDDLE_CATEGORIES)[number]['name']]: (typeof MIDDLE_CATEGORIES)[number]['path'];
};

type RoutePath = {
  main: '';
  auth: 'auth';
  signIn: 'signin';
  signUp: 'signup';
} & MainCategoriesRoutePath &
  MiddleCategoriesRoutePath;

export type { Path, Categories, MainCategory, MiddleCategory, RoutePath };
