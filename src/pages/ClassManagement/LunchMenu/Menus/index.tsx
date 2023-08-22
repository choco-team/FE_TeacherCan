import useLunchMenu from '@Hooks/api/useLunchMenu';

import dateFunctions from '@Utils/date';

import PageLoading from '@Components/PageLoading';

import * as S from './style';
import { MenuProps } from './type';
import MenusInformation from '../MenusInformation/MenusInformation';

function Menus({ date }: MenuProps) {
  const { lunchMenu, origins, isLoading } = useLunchMenu(date, 'weekend');

  if (isLoading) {
    return <PageLoading />;
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
              {menu?.map(({ dish, allergy }) => {
                return (
                  <S.Menu key={dish}>
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
