import { Suspense, useState } from 'react';

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
  const { updateUser, isLoading: updateLoading } = useUserInfoAction();
  const isLoading = !userInfo;

  const changeStandardDate = (date: Date) => setPickDate(date);

  if (isLoading || updateLoading) return <PageLoading />;

  const { school } = userInfo;

  if (!school) {
    return (
      <>
        <RegisterSchoolButton />
        <S.NoSchool>
          등록된 학교가 없어요. 학교 등록하기를 통해 학교를 등록해 보세요.
        </S.NoSchool>
      </>
    );
  }

  return (
    <S.Layout>
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
      <SearchDate pickDate={pickDate} changeStandardDate={changeStandardDate} />
      <S.BoardLayout>
        <Suspense fallback={<PageLoading />}>
          <Menus date={pickDate} />
        </Suspense>
      </S.BoardLayout>
    </S.Layout>
  );
}

export default LunchMenu;
