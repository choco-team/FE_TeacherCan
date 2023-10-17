import {
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState,
} from 'react';
import styled from 'styled-components';

type ModalContext = {
  isOpen: boolean;
  openModal: (model: ReactNode) => void;
  closeModal: () => void;
} | null;

export const ModalContext = createContext<ModalContext>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [currentModal, setCurrentModal] = useState<ReactNode | null>(null);
  const isOpen = !!currentModal;

  const openModal = (modal: ReactNode) => setCurrentModal(modal);

  const closeModal = () => setCurrentModal(null);

  const value = {
    isOpen,
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

  overflow-y: auto;

  padding: 20px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.background.gray};
`;
