import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import * as S from './style';

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
    <S.Layout>
      <S.Title>알러지 정보 확인</S.Title>
      <S.SubTitle>
        요리명에 표시된 번호는 알러지를 유발할수 있는 식재료에요.
      </S.SubTitle>
      <S.AllergyList>
        {allergyList.map(([number, ingredient]) => (
          <div key={number}>
            <span>{number}: </span>
            <span>{ingredient}</span>
          </div>
        ))}
      </S.AllergyList>
      <Button onClick={closeModal}>확인</Button>
    </S.Layout>
  );
}

export default AllergyModal;
