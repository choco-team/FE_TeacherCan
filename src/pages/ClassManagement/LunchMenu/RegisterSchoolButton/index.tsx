import useModal from '@Hooks/useModal';

import Button from '@Components/Button';

import RegisterSchoolModal from '../RegisterSchoolModal';

function RegisterSchoolButton() {
  const { openModal } = useModal();
  const handleClickButton = () => {
    openModal(<RegisterSchoolModal />);
  };
  return (
    <Button size="md" onClick={handleClickButton}>
      학교 등록하기
    </Button>
  );
}

export default RegisterSchoolButton;
