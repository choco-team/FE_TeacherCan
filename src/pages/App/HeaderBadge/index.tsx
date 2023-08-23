import { HiOutlineBell, HiUserCircle } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import useUserInfoAction from '@Hooks/useUserInfoAction';

import Button from '@Components/Button';
import Menu from '@Components/Menu';

import * as S from './style';
import type { HeaderBadge } from './type';

function HeaderBadge({ username, alarm = false, isLoading }: HeaderBadge) {
  const { signOut } = useUserInfoAction();

  const UserButtonTrigger = () => {
    return (
      <Button borderRadius="20px" padding="5px 10px" fontWeight="400">
        <S.UserNameWrapper>
          <HiUserCircle />
          <S.UserName>{username}</S.UserName>
          <MdKeyboardArrowDown />
        </S.UserNameWrapper>
      </Button>
    );
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
      <Menu trigger={<UserButtonTrigger />} position="right">
        <Menu.Item onClickMenu={() => alert('준비중입니다.')}>
          <S.MenuItemLayout>
            <div>프로필</div>
            <HiUserCircle />
          </S.MenuItemLayout>
        </Menu.Item>
        <Menu.Item onClickMenu={() => signOut()}>
          <S.MenuItemLayout>
            <div>로그아웃</div>
            <RiLogoutCircleRLine />
          </S.MenuItemLayout>
        </Menu.Item>
      </Menu>
    </S.Layout>
  );
}

export default HeaderBadge;
