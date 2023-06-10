import route from '@Utils/route';

import NavigationLink from '@Components/NavigationLink';

import type { MainCategory } from '@Types/route';

import * as S from './style';

function SideNavLink({ pathname }: { pathname: string }) {
  const [mainPath, subPath] = route.getPathnames(pathname);

  const mainCategory = route.findCategory(mainPath) as MainCategory;

  const middleCategory = route.getMiddleCategories(mainCategory);

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
