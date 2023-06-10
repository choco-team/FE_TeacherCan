import route from '@Utils/route';

import { CATEGORIES } from '@Constant/routePath';

import NavigationLink from '@Components/NavigationLink';

import type { MiddleCategory } from '@Types/route';

import * as S from './style';

function SideNavLink({ pathname }: { pathname: string }) {
  const [, mainPath, subPath] = pathname.split('/');

  const mainCategory = CATEGORIES.find(
    (category) => category.path === mainPath,
  );

  const middleCategory = CATEGORIES.filter((category) => {
    if (mainCategory?.category === 'middle' || category.category === 'main')
      return false;

    return mainCategory?.children.includes(category.key);
  }) as MiddleCategory[];

  return (
    <S.Layout>
      {middleCategory.map((category) => (
        <NavigationLink
          key={category.key}
          category={category.category}
          name={category.name}
          Icon={category.Icon}
          path={route.calculatePath([mainPath, category.path])}
          isSelected={subPath === category.path}
        />
      ))}
    </S.Layout>
  );
}

export default SideNavLink;
