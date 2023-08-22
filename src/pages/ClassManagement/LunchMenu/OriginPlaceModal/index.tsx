import styled from 'styled-components';

import Button from '@Components/Button';

import { useModal } from '@Providers/ModalProvider';

function OriginPlaceModal({ origins }: { origins: [string, string][] | null }) {
  const { closeModal } = useModal();

  return (
    <Layout>
      <Title>원산지 정보 확인</Title>
      <SubTitle>이번주 메뉴의 원산지 정보에요.</SubTitle>
      <Origins>
        {origins?.map(([ingredient, place]) => (
          <div key={ingredient}>
            <span>{ingredient}: </span>
            <span>{place}</span>
          </div>
        ))}
      </Origins>
      <Button onClick={closeModal}>확인</Button>
    </Layout>
  );
}

export default OriginPlaceModal;

const Layout = styled.div`
  display: grid;
  row-gap: 20px;

  button {
    justify-self: flex-end;
  }
`;

const Title = styled.h3`
  text-align: center;

  font-size: 1.8rem;
  color: ${(props) => props.theme.accentText};
  font-weight: 600;
`;

const SubTitle = styled.h4`
  color: ${(props) => props.theme.grayText};
`;

const Origins = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
