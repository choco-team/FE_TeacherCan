import useLunchMenu from '@Hooks/api/useLunchMenu';

import * as S from './style';

function Menus() {
  const { lunchMenu, isLoading } = useLunchMenu();

  if (isLoading) {
    return (
      <>
        {[1, 2, 3, 4, 5].map((key) => {
          return (
            <S.Layout isLoading={isLoading} key={key}>
              <S.Menu>
                <S.Name isLoading={isLoading}>로딩</S.Name>
              </S.Menu>
              <S.Menu>
                <S.Name isLoading={isLoading}>로딩</S.Name>
              </S.Menu>
              <S.Menu>
                <S.Name isLoading={isLoading}>로딩</S.Name>
              </S.Menu>
              <S.Menu>
                <S.Name isLoading={isLoading}>로딩</S.Name>
              </S.Menu>
              <S.Menu>
                <S.Name isLoading={isLoading}>로딩</S.Name>
              </S.Menu>
            </S.Layout>
          );
        })}
      </>
    );
  }

  return (
    <>
      <S.Layout>
        <div>08.07</div>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <S.Menu key={menu}>
              <S.Name>{menu}</S.Name>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.Menu>
          );
        })}
      </S.Layout>
      <S.Layout>
        <div>08.07</div>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <S.Menu key={menu}>
              <S.Name>{menu}</S.Name>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.Menu>
          );
        })}
      </S.Layout>
      <S.Layout>
        <div>08.07</div>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <S.Menu key={menu}>
              <S.Name>{menu}</S.Name>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.Menu>
          );
        })}
      </S.Layout>
      <S.Layout>
        <div>08.07</div>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <S.Menu key={menu}>
              <S.Name>{menu}</S.Name>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.Menu>
          );
        })}
      </S.Layout>
      <S.Layout>
        <div>08.07</div>
        {lunchMenu?.map(({ menu, allergy }) => {
          return (
            <S.Menu key={menu}>
              <S.Name>{menu}</S.Name>
              <S.Allergies>{allergy.join(' ')}</S.Allergies>
            </S.Menu>
          );
        })}
      </S.Layout>
    </>
  );
}

export default Menus;
