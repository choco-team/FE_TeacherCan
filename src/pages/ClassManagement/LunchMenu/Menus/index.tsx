import { useLunchMenuList } from '@Hooks/query/school/useLunchMenu';

import dateFunctions from '@Utils/date';

import * as S from './style';
import { MenuProps } from './type';
import MenusInformation from '../MenusInformation';

function Menus({ date }: MenuProps) {
  const { lunchMenuList, origins } = useLunchMenuList({
    date: dateFunctions.getToday(date),
    type: 'weekend',
  });

  if (!lunchMenuList.length) {
    return <S.NoLunch>이번 주 급식 정보가 없어요.</S.NoLunch>;
  }

  return (
    <>
      {lunchMenuList.map(({ menu, date }, index) => {
        return (
          <S.Layout key={index}>
            <S.Date isToday={dateFunctions.isToday(new Date(date))}>
              {dateFunctions.getMonthDateDay(new Date(date))}
            </S.Date>
            <S.MenuContainer>
              {menu?.map(({ dish, allergy }, index) => {
                return (
                  <S.Menu key={dish + index}>
                    <S.Name>{dish}</S.Name>
                    <S.Allergies>{allergy.join(' ')}</S.Allergies>
                  </S.Menu>
                );
              })}
            </S.MenuContainer>
          </S.Layout>
        );
      })}
      <MenusInformation origins={origins} />
    </>
  );
}

export default Menus;
