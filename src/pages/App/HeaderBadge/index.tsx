import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import route from '@Utils/route';

import { flexCustom } from '@Styles/common';

type HeaderBadgeType = {
  username: string;
  alarm: boolean;
};

function HeaderBadge({ username, alarm }: HeaderBadgeType) {
  return (
    <Layout>
      <AlarmContainer>
        <HiOutlineBell />
        <AlarmDot>{alarm && <Dot></Dot>}</AlarmDot>
      </AlarmContainer>
      <HeaderUserContainer>
        <HiUserCircle />
        {username ? (
          <UserNameWrapper>
            <UserName>{username}</UserName>
            <MdKeyboardArrowDown />
          </UserNameWrapper>
        ) : (
          <UserName>
            <Link to={route.calculatePath(['auth', 'signin'])}>Sign In</Link>
          </UserName>
        )}
      </HeaderUserContainer>
    </Layout>
  );
}

export default HeaderBadge;

const Layout = styled.div`
  ${flexCustom('row', 'center', 'normal')}
  svg {
    ${flexCustom('row', 'center', 'normal')}
    font-size: 2.5rem;
  }
`;

const AlarmContainer = styled.div`
  position: relative;

  margin-right: 10px;

  cursor: pointer;
`;

const AlarmDot = styled.div`
  position: absolute;
  bottom: 0;
  right: -2px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.accentText};
`;

const HeaderUserContainer = styled.div`
  ${flexCustom('row', 'center', 'normal')}
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.background.basic};

  padding: 5px 10px;
  border-radius: 20px;

  cursor: pointer;
`;

const UserNameWrapper = styled.div`
  ${flexCustom('row', 'center', 'normal')}
`;

const UserName = styled.div`
  margin: 0px 5px;
`;
