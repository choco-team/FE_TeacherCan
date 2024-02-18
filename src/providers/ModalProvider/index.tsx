import {
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import Keyframes from 'styled-components/dist/models/Keyframes';

import useKeydown from '@Hooks/useKeydown';
import usePreventBodyScroll from '@Hooks/usePreventBodyScroll';

import { ThemeStyleSet } from '@Types/style';

export type Animation = 'appear' | 'disAppear';

type ModalContext = {
  isOpen: boolean;
  animation: Animation;
  openModal: (model: ReactNode) => void;
  closeModal: () => void;
} | null;

export const ModalContext = createContext<ModalContext>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [currentModal, setCurrentModal] = useState<ReactNode | null>(null);
  const [animation, setAnimation] = useState<Animation>('appear');
  const isOpen = !!currentModal;

  const openModal = (modal: ReactNode) => {
    setAnimation('appear');
    setCurrentModal(modal);
  };

  const closeModal = () => {
    setAnimation('disAppear');
    setTimeout(() => {
      setCurrentModal(null);
    }, 200);
  };

  const value = {
    isOpen,
    animation,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <Modal closeModal={closeModal} animation={animation}>
          {currentModal}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

type ModalProps = {
  animation: Animation;
  closeModal: () => void;
};

const Modal = ({
  animation,
  children,
  closeModal,
}: PropsWithChildren<ModalProps>) => {
  usePreventBodyScroll();

  useKeydown('Escape', closeModal);

  const onClickBackdrop = () => {
    closeModal();
  };

  const preventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalBackdrop onClick={onClickBackdrop}>
      <ModalContainer animation={animation} onClick={preventCloseModal}>
        {children}
      </ModalContainer>
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

const modalAnimation: Record<Animation, Keyframes> = {
  appear: keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,

  disAppear: keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`,
};

const ModalContainer = styled.div<{ animation: Animation }>`
  width: 480px;
  max-height: 500px;

  overflow-y: auto;

  padding: 20px;
  border-radius: 8px;

  ${({ theme, animation }) => css`
    color: ${theme.text};
    background-color: ${theme.mainBackground};
    animation: ${modalAnimation[animation]} 0.2s ease;
  `}
`;
