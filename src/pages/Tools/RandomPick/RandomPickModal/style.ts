import styled from 'styled-components';

import theme from '@Styles/theme';

export const ModalContainer = styled.div`
  padding: 5px;
`;

export const SmallButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  button {
    margin-right: 5px;
  }
`;

export const SmallButton = styled.button<{ isOnClick?: boolean }>`
  background-color: ${({ isOnClick }) =>
    isOnClick ? theme.color.primary[500] : 'grey'};
  border: black;
  color: white;
  border-radius: 2px;
  margin: 5px;
  padding: 3px;
`;

export const PersonInput = styled.input`
  margin: 5px;
  padding: 3px;
  background-color: grey;
  color: white;
  max-width: 50px;
`;
