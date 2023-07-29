import TeacherCanWarningIcon from '@Components/Icon/TeacherCanWarningIcon';
import { ChangeEvent, useState } from 'react';

import useMe from '@Hooks/api/useMe';

import dateFunctions from '@Utils/date';

import CircularProgress from '@Components/CircularProgress';

import Board from './Board';
import RegisterShoolButton from './RegisterShoolButton/RegisterShoolButton';
import * as S from './style';

function LunchMenu() {
  const { data, isLoading } = useMe();
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

  const {
    data: { schoolName },
  } = data;

  return (
    <S.Layout>
      <div>
        {schoolName ? (
          <S.SchoolName>{schoolName} 급식</S.SchoolName>
        ) : (
          <RegisterShoolButton />
        )}
      </div>
      <S.StandardDate
        type="date"
        value={standardDate}
        onChange={changeStandardDate}
      />
      {schoolName ? (
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
