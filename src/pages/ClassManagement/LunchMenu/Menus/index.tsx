import useLunchMenu from '@Hooks/api/useLunchMenu';

import dateFunctions from '@Utils/date';

import PageLoading from '@Components/PageLoading';

import * as S from './style';
import { MenuProps } from './type';
import MenusInformation from '../MenusInformation';

function Menus({ date }: MenuProps) {
  const { lunchMenu, origins, isLoading } = useLunchMenu(date, 'weekend');

  if (isLoading) {
    return <PageLoading />;
  }

  if (!lunchMenu) {
    return <S.NoLunch>이번주 급식 정보가 없어요.</S.NoLunch>;
  }

  return (
    <>
      {lunchMenu?.map(({ menu, date }, index) => {
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
