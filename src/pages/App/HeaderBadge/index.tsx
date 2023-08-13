import { useState } from 'react';
import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Button from '@Components/Button';

import * as S from './style';
import type { HeaderBadge } from './type';

function HeaderBadge({ username, alarm = false, isLoading }: HeaderBadge) {
  const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);

  const handleClickHeaderBadge = () => {
    setIsVisibleUserMenu(true);
  };

  if (isLoading)
    return (
      <S.Layout>
        <Button borderRadius="20px" padding="5px 10px" fontWeight="400">
          <S.LoadingText>Loading</S.LoadingText>
        </Button>
      </S.Layout>
    );

  return (
    <S.Layout>
      <S.AlarmContainer>
        <HiOutlineBell />
        <S.AlarmDot>{alarm && <S.Dot></S.Dot>}</S.AlarmDot>
      </S.AlarmContainer>
      <Button
        borderRadius="20px"
        padding="5px 10px"
        handleClick={handleClickHeaderBadge}
        fontWeight="400"
      >
        <S.UserNameWrapper>
          <HiUserCircle />
          <S.UserName>{username}</S.UserName>
          <MdKeyboardArrowDown />
        </S.UserNameWrapper>
      </Button>
    </S.Layout>
  );
}

export default HeaderBadge;
