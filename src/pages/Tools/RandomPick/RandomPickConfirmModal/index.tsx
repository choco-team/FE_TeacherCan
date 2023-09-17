import Button from '@Components/Button';

import * as S from './style';

type CustomModalProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const CustomModal = ({
  message,
  isVisible,
  onClose,
  onConfirm,
}: CustomModalProps) => {
  return (
    <S.ModalWrapper visible={isVisible}>
      <S.ModalContent>
        <p>{message}</p>
        <Button onClick={onConfirm}>확인</Button>
        <Button onClick={onClose}>취소</Button>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
