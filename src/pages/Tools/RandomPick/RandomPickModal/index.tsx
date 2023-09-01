import { AiFillSetting } from 'react-icons/ai';

import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

type RandomPickModalProps = {
  children: React.ReactNode;
};

function RandomPickModal({ children }: RandomPickModalProps) {
  const { openModal } = useModal();

  return (
    <>
      <Button
        size="lg"
        onClick={() => {
          openModal(children);
        }}
      >
        <AiFillSetting />
        <div>설정</div>
      </Button>
    </>
  );
}

export default RandomPickModal;
