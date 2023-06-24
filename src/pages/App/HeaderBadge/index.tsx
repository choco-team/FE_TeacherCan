import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

import route from '@Utils/route';

import Button from '@Components/Button';

import * as S from './style';
import type { HeaderBadge } from './type';

function HeaderBadge({ username, alarm = false }: HeaderBadge) {
  return (
    <S.Layout>
      {username && (
        <S.AlarmContainer>
          <HiOutlineBell />
          <S.AlarmDot>{alarm && <S.Dot></S.Dot>}</S.AlarmDot>
        </S.AlarmContainer>
      )}
      <Button borderRadius="20px" padding="5px 10px">
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
              <Link to={route.calculatePath(['auth', 'signin'])}>Sign In</Link>
            </>
          )}
        </S.UserNameWrapper>
      </Button>
    </S.Layout>
  );
}

export default HeaderBadge;
