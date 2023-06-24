import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import route from '@Utils/route';

import Button from '@Components/Button';

import * as S from './style';
import type { HeaderBadge } from './type';

function HeaderBadge({ username, alarm = false }: HeaderBadge) {
  const navigate = useNavigate();

  const handleClickHeaderBadge = () => {
    if (username) something();
    else moveToSignInPage();
  };

  const moveToSignInPage = () => {
    navigate(route.calculatePath(['auth', 'signin']));
  };

  const something = () => {
    alert('something...');
  };

  return (
    <S.Layout>
      {username && (
        <S.AlarmContainer>
          <HiOutlineBell />
          <S.AlarmDot>{alarm && <S.Dot></S.Dot>}</S.AlarmDot>
        </S.AlarmContainer>
      )}
      <Button
        borderRadius="20px"
        padding="5px 10px"
        handleClick={handleClickHeaderBadge}
        fontWeight="400"
      >
        <S.UserNameWrapper>
          {username ? (
            <>
              <HiUserCircle />
              <S.UserName>{username}</S.UserName>
              <MdKeyboardArrowDown />
            </>
          ) : (
            <>
              <HiUserCircle />
              <S.UserName>Sign In</S.UserName>
            </>
          )}
        </S.UserNameWrapper>
      </Button>
    </S.Layout>
  );
}

export default HeaderBadge;
