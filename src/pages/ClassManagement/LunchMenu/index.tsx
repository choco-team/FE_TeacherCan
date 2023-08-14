import TeacherCanWarningIcon from '@Components/Icon/TeacherCanWarningIcon';
import { ChangeEvent, useState } from 'react';

import dateFunctions from '@Utils/date';

import CircularProgress from '@Components/CircularProgress';

import { useUserInfo } from '@Providers/UserProvider';

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

  const {
    school: { name: schoolName },
  } = data;

  return (
    <S.Layout>
      <div>
        {schoolName ? (
          <S.SchoolName>{schoolName} 급식</S.SchoolName>
        ) : (
          <RegisterSchoolButton />
        )}
      </div>
      {schoolName ? (
        <S.StandardDate
          type="date"
          value={standardDate}
          onChange={changeStandardDate}
          disabled={!schoolName}
        />
      ) : (
        <div></div>
      )}
      {schoolName ? (
        <Board />
      ) : (
        <S.IconWrapper>
          <TeacherCanWarningIcon />
          <div>
            학교 등록을 하라고하는 티처캔 아이콘 만들어 주세요. svg로요. 혹은
            data가 없을 경우에 일관적으로 보여지는 무언가가 필요합니다.
            텍스트인지? 아니면 아이콘인지 통일하는건 어떨까요?
            <div>1. 아이콘 + 텍스트</div>
            <div>2. 텍스트</div>
          </div>
        </S.IconWrapper>
      )}
    </S.Layout>
  );
}

export default LunchMenu;
