import styled from 'styled-components';

type ModalWrapperProps = {
  visible: boolean;
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-right: 10px;
`;
