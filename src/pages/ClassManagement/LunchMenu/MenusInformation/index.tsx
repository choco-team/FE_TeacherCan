import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import useModal from '@Hooks/useModal';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import Button from '@Components/Button';

import { LUNCH_MENU_GUIDES } from './constants';
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
      onClick: () => {
        openModal(<OriginPlaceModal origins={origins} />);
      },
    },
    {
      name: '알러지 정보 확인',
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
        {lunchMenuButtons.map(({ name, onClick }) => (
          <Button
            key={name}
            onClick={onClick}
            $style={css`
              width: 100%;
            `}
          >
            <span>{name}</span>
          </Button>
        ))}
      </S.ButtonContainer>
    </S.Layout>
  );
}

export default MenusInformation;
