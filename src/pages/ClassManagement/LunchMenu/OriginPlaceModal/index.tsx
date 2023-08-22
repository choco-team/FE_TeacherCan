import Button from '@Components/Button';

import { useModal } from '@Providers/ModalProvider';

import * as S from './style';

function OriginPlaceModal({ origins }: { origins: [string, string][] | null }) {
  const { closeModal } = useModal();

  return (
    <S.Layout>
      <S.Title>원산지 정보 확인</S.Title>
      <S.SubTitle>이번주 메뉴의 원산지 정보에요.</S.SubTitle>
      <S.Origins>
        {origins?.map(([ingredient, place]) => (
          <div key={ingredient}>
            <span>{ingredient}: </span>
            <span>{place}</span>
          </div>
        ))}
      </S.Origins>
      <Button onClick={closeModal}>확인</Button>
    </S.Layout>
  );
}

export default OriginPlaceModal;
