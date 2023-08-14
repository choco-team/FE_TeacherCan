import { useContext } from 'react';

import { ModalContext } from '@Providers/ModalProvider';

// 전역에서 모달을 열고 닫을 수 있는 custom Hook
export const useModal = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw new Error('Modal 에러');
  }

  return value;
};
