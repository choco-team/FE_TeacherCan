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
    <S.ModalOverlay visible={isVisible}>
      <S.ModalContent>
        <p>{message}</p>
        <S.Button onClick={onConfirm}>Confirm</S.Button>
        <S.Button onClick={onClose}>Cancel</S.Button>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
