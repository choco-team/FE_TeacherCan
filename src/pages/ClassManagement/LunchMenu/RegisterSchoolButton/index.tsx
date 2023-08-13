import { useModal } from 'src/providers/ModalProvider';

import Button from '@Components/Button';

import RegisterSchoolModal from '../RegisterSchoolModal';

function RegisterSchoolButton() {
  const { openModal } = useModal();
  const handleClickButton = () => {
    openModal(<RegisterSchoolModal />);
  };
  return (
    <>
      <Button fontSize="2rem" handleClick={handleClickButton}>
        학교 등록하기
      </Button>
    </>
  );
}

export default RegisterSchoolButton;
