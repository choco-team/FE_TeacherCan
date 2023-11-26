import { useState } from 'react';

import useUserInfo from '@Hooks/useUserInfo';
import useUserInfoAction from '@Hooks/useUserInfoAction';

import Button from '@Components/Button';
import PageLoading from '@Components/PageLoading';

import Menus from './Menus';
import RegisterSchoolButton from './RegisterSchoolButton';
import SearchDate from './SearchDate';
import * as S from './style';

function LunchMenu() {
  const [pickDate, setPickDate] = useState(new Date());

  const { userInfo } = useUserInfo();
  const { updateUser } = useUserInfoAction();
  const isLoading = !userInfo;

  const changeStandardDate = (date: Date) => setPickDate(date);

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
      {school && (
        <SearchDate
          pickDate={pickDate}
          changeStandardDate={changeStandardDate}
        />
      )}
      <S.BoardLayout>
        {school ? <Menus date={pickDate} /> : <div></div>}
      </S.BoardLayout>
    </S.Layout>
  );
}

export default LunchMenu;
