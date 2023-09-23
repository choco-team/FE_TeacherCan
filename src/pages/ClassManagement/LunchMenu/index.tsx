import { ChangeEvent, useState } from 'react';

import useUserInfo from '@Hooks/useUserInfo';
import useUserInfoAction from '@Hooks/useUserInfoAction';

import dateFunctions from '@Utils/date';

import Button from '@Components/Button';
import PageLoading from '@Components/PageLoading';

import Menus from './Menus';
import RegisterSchoolButton from './RegisterSchoolButton';
import * as S from './style';

function LunchMenu() {
  const { userInfo } = useUserInfo();
  const { updateUser } = useUserInfoAction();
  const isLoading = !userInfo;

  console.log(userInfo);

  const [standardDate, setStandardDate] = useState(dateFunctions.getToday());

  const changeStandardDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStandardDate(event.target.value);
  };

  if (isLoading) return <PageLoading />;

  const { school } = userInfo;

  return (
    <S.Layout>
      <div>
        {school ? (
          <S.TitleContainer>
            <S.SchoolName>{school.name} 급식</S.SchoolName>
            <Button
              onClick={() => {
                updateUser({
                  schoolCode: null,
                });
              }}
              concept="outlined"
            >
              학교 정보 삭제
            </Button>
          </S.TitleContainer>
        ) : (
          <>
            <RegisterSchoolButton />
            <S.NoSchool>
              등록된 학교가 없어요. 학교 등록하기를 통해 학교를 등록해 보세요.
            </S.NoSchool>
          </>
        )}
      </div>
      {school ? (
        <S.StandardDate
          type="date"
          value={standardDate}
          onChange={changeStandardDate}
          disabled={!school.name}
        />
      ) : (
        <div></div>
      )}
      <S.BoardLayout>
        {school ? <Menus date={new Date(standardDate)} /> : <div></div>}
      </S.BoardLayout>
    </S.Layout>
  );
}

export default LunchMenu;
