import { Link } from 'react-router-dom';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import NavigationLink from '@Components/NavigationLink';

import logo from '@Assets/image/icon/logo.png';

import * as S from './style';

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
            path={category.path}
            isSelected={route.getPathnames(pathname).includes(category.path)}
          />
        ))}
      </S.LinkList>
    </S.Layout>
  );
}

export default Header;
