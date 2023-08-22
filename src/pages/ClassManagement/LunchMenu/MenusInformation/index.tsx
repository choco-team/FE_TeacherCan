import { TbMoodKid } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import Button from '@Components/Button';

import { useModal } from '@Providers/ModalProvider';

import AllergyIcon from '@Assets/image/icon/AllergyIcon';
import OriginPlaceIcon from '@Assets/image/icon/OriginPlaceIcon';

import theme from '@Styles/theme';

import { LUNCH_MENU_GUIDES } from './constant';
import OriginPlaceModal from '../OriginPlaceModal';

type MenusInformationProps = {
  origins: [string, string][] | null;
};

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
        alert('알러지 보여주기');
      },
    },
  ];

  return (
    <Layout>
      <div>식단표에서는</div>
      <InformationContents>
        {LUNCH_MENU_GUIDES.map((item, index) => (
          <InformationContent key={index}>{item}</InformationContent>
        ))}
      </InformationContents>
      <ButtonContainer>
        {lunchMenuButtons.map(({ name, Icon, onClick }) => (
          <Button key={name} fullWidth onClick={onClick}>
            {Icon}
            <span>{name}</span>
          </Button>
        ))}
      </ButtonContainer>
    </Layout>
  );
}

export default MenusInformation;

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 10px;

  color: transparent;
`;

const InformationContents = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 8px;
  padding: 20px;

  background-color: ${(props) => props.theme.sectionBackground};
`;

const InformationContent = styled.li`
  line-height: 160%;
  color: ${(props) => props.theme.grayText};

  margin-left: 2rem;
  list-style-type: disc;

  &::marker {
    color: ${({ theme }) => theme.grayText};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
      position: relative;
      right: 16px;
    }
  }
`;
