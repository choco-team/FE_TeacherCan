import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

type RandomPickModalProps = {
  children: React.ReactNode;
};

function RandomPickModal({ children }: RandomPickModalProps) {
  const { openModal, closeModal } = useModal();

  return (
    <Button
      size="lg"
      onClick={() => {
        openModal(children);
      }}
    ></Button>
  );
}

export default RandomPickModal;
