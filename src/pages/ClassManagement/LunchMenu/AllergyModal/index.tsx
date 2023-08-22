import styled from 'styled-components';

import Button from '@Components/Button';

import { useModal } from '@Providers/ModalProvider';

const allergyList = [
  [1, '난류'],
  [2, '우유'],
  [3, '메밀'],
  [4, '땅콩'],
  [5, '대두'],
  [6, '밀'],
  [7, '고등어'],
  [8, '게'],
  [9, '새우'],
  [10, '돼지고기'],
  [11, '복숭아'],
  [12, '토마토'],
  [13, '아황산염'],
  [14, '호두'],
  [15, '닭고기'],
  [16, '쇠고기'],
  [17, '오징어'],
  [18, '조개류'],
];

function AllergyModal() {
  const { closeModal } = useModal();

  return (
    <Layout>
      <Title>알러지 정보 확인</Title>
      <SubTitle>
        요리명에 표시된 번호는 알러지를 유발할수 있는 식재료에요.
      </SubTitle>
      <AllergyList>
        {allergyList.map(([number, ingredient]) => (
          <div key={number}>
            <span>{number}: </span>
            <span>{ingredient}</span>
          </div>
        ))}
      </AllergyList>
      <Button onClick={closeModal}>확인</Button>
    </Layout>
  );
}

export default AllergyModal;

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

const AllergyList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
