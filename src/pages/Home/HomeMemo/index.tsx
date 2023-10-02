import Button from '@Components/Button';
import TextArea from '@Components/TextArea';

import * as S from './style';

function HomeMemo() {
  const handleClick = () => {
    console.log('아직 모름');
  };

  return (
    <S.Layout>
      <S.HeaderContainer>
        <S.Label>메모</S.Label>
        <Button handleClick={handleClick} fontSize="1.4rem">
          저장목록
        </Button>
      </S.HeaderContainer>
      <TextArea
        placeholder="메모를 남겨주세요."
        borderStyle="dashed"
        borderWidth="2px"
        rows={4}
      />
      <S.ButtonContainer>
        <Button fontSize="1.4rem">취소</Button>
        <Button fontSize="1.4rem">저장</Button>
      </S.ButtonContainer>
    </S.Layout>
  );
}

export default HomeMemo;
