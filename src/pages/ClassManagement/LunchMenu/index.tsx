import TeacherCanWarningIcon from '@Components/Icon/TeacherCanWarningIcon';
import { ChangeEvent, useState } from 'react';

import { useUserInfo } from '@Hooks/useUserInfo';

import dateFunctions from '@Utils/date';

import CircularProgress from '@Components/CircularProgress';

import Board from './Board';
import RegisterSchoolButton from './RegisterSchoolButton';
import * as S from './style';

function LunchMenu() {
  const { data } = useUserInfo();
  const isLoading = !data;
  const [standardDate, setStandardDate] = useState(dateFunctions.getToday());

  const changeStandardDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStandardDate(event.target.value);
  };

  if (isLoading)
    return (
      <S.LoadLayout>
        <CircularProgress size="x-large" />
      </S.LoadLayout>
    );

  const { school } = data;

  return (
    <S.Layout>
      <div>
        {school?.name ? (
          <S.SchoolName>{school.name} 급식</S.SchoolName>
        ) : (
          <RegisterSchoolButton />
        )}
      </div>
      {school?.name ? (
        <S.StandardDate
          type="date"
          value={standardDate}
          onChange={changeStandardDate}
          disabled={!school.name}
        />
      ) : (
        <div></div>
      )}
      {school?.name ? (
        <Board />
      ) : (
        <S.IconWrapper>
          <TeacherCanWarningIcon />
        </S.IconWrapper>
      )}
    </S.Layout>
  );
}

export default LunchMenu;
