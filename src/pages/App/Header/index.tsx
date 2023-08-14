import { Link } from 'react-router-dom';

import { useUserInfo } from '@Hooks/useUserInfo';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import logo from '@Assets/image/icon/logo.png';

import * as S from './style';
import HeaderBadge from '../HeaderBadge';
import NavigationLink from '../NavigationLink';

function Header({ pathname }: { pathname: string }) {
  const { data } = useUserInfo();
  const isLoading = !data;

  const mainCategories = route.getMainCategories();
  const mainCategoriesCount = mainCategories.length;

  return (
    <S.Layout>
      <S.Logo>
        <Link to={ROUTE_PATH.main}>
          <S.LogoImage src={logo} alt="로고" />
          <S.LogoText>티처캔</S.LogoText>
        </Link>
      </S.Logo>
      <S.LinkList mainCategoriesCount={mainCategoriesCount}>
        {mainCategories.map((category) => (
          <NavigationLink
            key={category.name}
            name={category.name}
            category={category.category}
            path={route.calculatePath([category.path, category.firstChildPath])}
            isSelected={route.getPathnames(pathname).includes(category.path)}
          />
        ))}
      </S.LinkList>
      <HeaderBadge username={data?.nickname} alarm isLoading={isLoading} />
    </S.Layout>
  );
}

export default Header;
