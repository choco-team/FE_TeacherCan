import { Link } from 'react-router-dom';

import useFetch from '@Hooks/useFetch';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import logo from '@Assets/image/icon/logo.png';

import * as S from './style';
import HeaderBadge from '../HeaderBadge';
import NavigationLink from '../NavigationLink';

type User = {
  statusCode: number;
  data: {
    userId: string;
    nickName: string;
    schoolName: string;
    schoolCode: string;
    areaCode: string;
  };
};

function Header({ pathname }: { pathname: string }) {
  const { data, loading } = useFetch<User>('/user/info');

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
      <HeaderBadge username={data?.data.nickName} alarm loading={loading} />
    </S.Layout>
  );
}

export default Header;
