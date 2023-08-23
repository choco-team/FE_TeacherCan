import { TbMoodKid } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import useModal from '@Hooks/useModal';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import Button from '@Components/Button';

import AllergyIcon from '@Assets/image/icon/AllergyIcon';
import OriginPlaceIcon from '@Assets/image/icon/OriginPlaceIcon';

import theme from '@Styles/theme';

import { LUNCH_MENU_GUIDES } from './constant';
import * as S from './style';
import { MenusInformationProps } from './type';
import AllergyModal from '../AllergyModal';
import OriginPlaceModal from '../OriginPlaceModal';

function MenusInformation({ origins }: MenusInformationProps) {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const lunchMenuButtons = [
    {
      name: '학생 정보로 이동',
      Icon: <TbMoodKid />,
      onClick: () => {
        navigate(
          route.calculatePath([
            ROUTE_PATH.studentManagement,
            ROUTE_PATH.studentInfo,
          ]),
        );
      },
    },
    {
      name: '원산지 정보 확인',
      Icon: <OriginPlaceIcon color={theme.color.white} />,
      onClick: () => {
        openModal(<OriginPlaceModal origins={origins} />);
      },
    },
    {
      name: '알러지 정보 확인',
      Icon: <AllergyIcon color={theme.color.white} />,
      onClick: () => {
        openModal(<AllergyModal />);
      },
    },
  ];

  return (
    <S.Layout>
      <div>식단표에서는</div>
      <S.InformationContents>
        {LUNCH_MENU_GUIDES.map((item, index) => (
          <S.InformationContent key={index}>{item}</S.InformationContent>
        ))}
      </S.InformationContents>
      <S.ButtonContainer>
        {lunchMenuButtons.map(({ name, Icon, onClick }) => (
          <Button key={name} fullWidth onClick={onClick}>
            {Icon}
            <span>{name}</span>
          </Button>
        ))}
      </S.ButtonContainer>
    </S.Layout>
  );
}

export default MenusInformation;
