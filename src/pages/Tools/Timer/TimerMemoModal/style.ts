import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  display: grid;
  gap: 20px;
`;

export const ModalTitle = styled.h2`
  justify-self: center;

  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.color.primary[500]};
`;

export const ModalDescription = styled.p`
  color: ${(props) => props.theme.grayText};
  line-height: 140%;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  margin-top: 10px;
`;
