import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

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
      {isOpen && currentModal}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw new Error('Modal 에러');
  }

  return value;
};
