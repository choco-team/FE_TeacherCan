import { useContext } from 'react';

import { ModalContext } from '@Providers/ModalProvider';

// 전역에서 모달을 열고 닫을 수 있는 custom Hook
const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error('Modal 에러');
  }

  return modalContext;
};

export default useModal;
