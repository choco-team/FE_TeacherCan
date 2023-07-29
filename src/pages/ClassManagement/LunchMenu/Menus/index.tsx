import useLunchMenu from '@Hooks/api/useLunchMenu';

import * as S from './style';

function Menus() {
  const { lunchMenu, isLoading } = useLunchMenu();

  if (isLoading) {
    return (
      <S.Layout isLoading={isLoading}>
        <S.Menu>
          <S.Name isLoading={isLoading}>로딩</S.Name>
        </S.Menu>
        <S.Menu>
          <S.Name isLoading={isLoading}>로딩</S.Name>
        </S.Menu>
      </S.Layout>
    );
  }

  return (
    <S.Layout>
      {lunchMenu?.map(({ menu, allergy }) => {
        return (
          <S.Menu key={menu}>
            <S.Name>{menu}</S.Name>
            <S.Allergies>{allergy.join(' ')}</S.Allergies>
          </S.Menu>
        );
      })}
    </S.Layout>
  );
}

export default Menus;
