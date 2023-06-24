import { Link } from 'react-router-dom';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import logo from '@Assets/image/icon/logo.png';

import * as S from './style';
import HeaderBadge from '../HeaderBadge';
import NavigationLink from '../NavigationLink';

function Header({ pathname }: { pathname: string }) {
  const mainCategories = route.getMainCategories();

  return (
    <S.Layout>
      <S.Logo>
        <Link to={ROUTE_PATH.main}>
          <S.LogoImage src={logo} alt="로고" />
          <S.LogoText>티처캔</S.LogoText>
        </Link>
      </S.Logo>
      <S.LinkList>
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
      <HeaderBadge username="김선생" />
    </S.Layout>
  );
}

export default Header;
