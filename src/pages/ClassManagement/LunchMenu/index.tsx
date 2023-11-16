import { DatePicker } from 'calendar-in-react';
import { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import styled from 'styled-components';

import useUserInfo from '@Hooks/useUserInfo';
import useUserInfoAction from '@Hooks/useUserInfoAction';

import format from '@Utils/format';

import Button from '@Components/Button';
import PageLoading from '@Components/PageLoading';

import theme from '@Styles/theme';

import Menus from './Menus';
import RegisterSchoolButton from './RegisterSchoolButton';
import * as S from './style';

function LunchMenu() {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [pickDate, setPickDate] = useState(new Date());

  const { userInfo } = useUserInfo();
  const { updateUser } = useUserInfoAction();
  const isLoading = !userInfo;

  const changeStandardDate = (date: Date) => {
    setPickDate(date);
    setIsOpenDatePicker(false);
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
        <>
          <SearchDateLayout>
            <span>{format.date(pickDate, '-')}</span>
            <BsCalendarCheck onClick={() => setIsOpenDatePicker(true)} />
            {isOpenDatePicker && (
              <DatePickerLayout>
                <DatePicker
                  startDate={pickDate}
                  onChangeDate={(date) => {
                    if (!date) return;
                    changeStandardDate(date);
                  }}
                  isOnlyOneDay={true}
                  themeColor={{
                    pick: theme.color.primary[100],
                    hover: theme.color.primary[50],
                  }}
                />
              </DatePickerLayout>
            )}
          </SearchDateLayout>
        </>
      ) : (
        <div></div>
      )}
      <S.BoardLayout>
        {school ? <Menus date={pickDate} /> : <div></div>}
      </S.BoardLayout>
    </S.Layout>
  );
}

export default LunchMenu;

const SearchDateLayout = styled.div`
  position: relative;

  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const DatePickerLayout = styled.div`
  position: absolute;

  top: 30px;
  right: 0;
`;
