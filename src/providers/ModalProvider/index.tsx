import {
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import styled from 'styled-components';

type ModalContext = {
  openModal: (model: ReactNode) => void;
  closeModal: () => void;
} | null;

const ModalContext = createContext<ModalContext>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [currentModal, setCurrentModal] = useState<ReactNode | null>(null);
  const isOpen = !!currentModal;

  const openModal = (modal: ReactNode) => setCurrentModal(modal);

  const closeModal = () => setCurrentModal(null);

  const value = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && <Modal closeModal={closeModal}>{currentModal}</Modal>}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

// 전역에서 모달을 열고 닫을 수 있는 custom Hook
export const useModal = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw new Error('Modal 에러');
  }

  return value;
};

type ModalProps = {
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: PropsWithChildren<ModalProps>) => {
  const onClickBackdrop = () => {
    closeModal();
  };

  const preventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalLayout onClick={onClickBackdrop}>
      <ModalContainer onClick={preventCloseModal}>{children}</ModalContainer>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;

  display: grid;
  align-items: center;
  justify-items: center;

  background-color: ${(props) => props.theme.modalBackground};

  z-index: 5;
`;

const ModalContainer = styled.div`
  width: 480px;
  max-height: 500px;

  padding: 20px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.background.gray};
`;
