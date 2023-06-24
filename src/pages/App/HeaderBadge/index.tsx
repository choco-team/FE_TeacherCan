import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

import route from '@Utils/route';

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
      <S.HeaderUserContainer>
        <HiUserCircle />
        {username ? (
          <S.UserNameWrapper>
            <S.UserName>{username}</S.UserName>
            <MdKeyboardArrowDown />
          </S.UserNameWrapper>
        ) : (
          <S.UserName>
            <Link to={route.calculatePath(['auth', 'signin'])}>Sign In</Link>
          </S.UserName>
        )}
      </S.HeaderUserContainer>
    </S.Layout>
  );
}

export default HeaderBadge;
