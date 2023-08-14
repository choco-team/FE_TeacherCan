import useLunchMenu from '@Hooks/api/useLunchMenu';

import PageLoading from '@Components/PageLoading';

import * as S from './style';
import { MenuProps } from './type';

function Menus({ date }: MenuProps) {
  const { lunchMenu, isLoading } = useLunchMenu(date, 'weekend');

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {lunchMenu?.map((item, index) => {
        return (
          <S.Layout key={index}>
            <div>08.07</div>
            {item.menu?.map(({ name, allergy }) => {
              return (
                <S.Menu key={name}>
                  <S.Name>{name}</S.Name>
                  <S.Allergies>{allergy.join(' ')}</S.Allergies>
                </S.Menu>
              );
            })}
          </S.Layout>
        );
      })}
    </>
  );
}

export default Menus;
