import useLunchMenu from '@Hooks/api/useLunchMenu';

import * as S from './style';

function Menus() {
  const { lunchMenu } = useLunchMenu();
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
