import { CATEGORIES } from '@Constant/routePath';

import NavigationLink from '@Components/NavigationLink';

import * as S from './style';

function Header({ pathname }: { pathname: string }) {
  const mainCategories = CATEGORIES.filter(
    (category) => category.category === 'main',
  );

  return (
    <S.Layout>
      <S.LinkList>
        {mainCategories.map((category) => (
          <NavigationLink
            key={category.name}
            name={category.name}
            category={category.category}
            path={category.path}
            isSelected={pathname.split('/').includes(category.path)}
          />
        ))}
      </S.LinkList>
    </S.Layout>
  );
}

export default Header;
