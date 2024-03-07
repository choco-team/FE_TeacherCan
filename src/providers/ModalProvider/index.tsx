import {
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import useKeydown from '@Hooks/useKeydown';
import usePreventBodyScroll from '@Hooks/usePreventBodyScroll';

import { ThemeStyleSet } from '@Types/style';

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
  usePreventBodyScroll();

  const isInitialRender = useRef(true);
  const { pathname } = useLocation();

  useKeydown('Escape', closeModal);

  const onClickBackdrop = () => {
    closeModal();
  };

  const preventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isInitialRender.current) isInitialRender.current = false;
    else closeModal();
  }, [closeModal, pathname]);

  return (
    <ModalBackdrop onClick={onClickBackdrop}>
      <ModalContainer onClick={preventCloseModal}>{children}</ModalContainer>
    </ModalBackdrop>
  );
};

const MODAL_BACKDROP_THEME: ThemeStyleSet = {
  light: css`
    background-color: rgba(0, 0, 0, 0.65);
  `,

  dark: css`
    background-color: rgba(110, 110, 110, 0.65);
  `,
};

const ModalBackdrop = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;

  display: grid;
  align-items: center;
  justify-items: center;

  z-index: 5;

  ${({ theme }) => css`
    ${MODAL_BACKDROP_THEME[theme.name]}
  `}
`;

const modalAnimation = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  width: 480px;
  max-height: 500px;

  overflow-y: auto;

  padding: 20px;
  border-radius: 8px;

  animation: ${modalAnimation} 0.2s ease;

  ${({ theme }) => css`
    color: ${theme.text};
    background-color: ${theme.mainBackground};
  `}
`;
