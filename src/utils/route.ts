import { CATEGORIES } from '@Constant/routePath';

import { MainCategory, MiddleCategory } from '@Types/route';

const route = {
  calculatePath: (paths: string[]) => '/' + paths.join('/'),

  getPathnames: (pathname: string) => pathname.split('/').slice(1),

  getMainCategories: () =>
    CATEGORIES.filter(
      (category) => category.category === 'main',
    ) as MainCategory[],

  getMiddleCategories: (mainCategory: MainCategory) =>
    CATEGORIES.filter((category) => {
      if (category.category === 'main') return false;

      return mainCategory?.children.includes(category.key);
    }) as MiddleCategory[],

  findCategory: (path: string) =>
    CATEGORIES.find((category) => category.path === path),
};

export default route;
