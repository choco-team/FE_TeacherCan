import { useState } from 'react';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';
import Input from '@Components/Input';

import * as S from './style';

type TimerMemoModalProps = {
  memo: string;
  changeMemo: (memo: string) => void;
};

const TimerMemoModal = ({ memo, changeMemo }: TimerMemoModalProps) => {
  const { closeModal } = useModal();

  const [newMemo, setNewMemo] = useState(memo);

  const handleClickReset = () => {
    closeModal();
    changeMemo('');
  };

  const handleClickConfirm = () => {
    closeModal();
    changeMemo(newMemo);
  };

  return (
    <S.Layout>
      <S.ModalTitle>타이머 메모 설정하기</S.ModalTitle>
      <S.ModalDescription>
        타이머 메모를 설정할 수 있어요. 메모는 최대 30자까지 가능해요.
      </S.ModalDescription>
      <Input
        placeholder="메모를 작성해주세요."
        maxLength={30}
        value={newMemo}
        onChange={(event) => setNewMemo(event.target.value)}
      />
      <S.BottomButtonContainer>
        <Button variant="gray" concept="text" onClick={handleClickReset}>
          초기화
        </Button>
        <Button onClick={handleClickConfirm}>확인</Button>
      </S.BottomButtonContainer>
    </S.Layout>
  );
};

export default TimerMemoModal;
