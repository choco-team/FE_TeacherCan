import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'stretch', 'flex-start')}
  background-color: ${(props) => props.theme.background.basic};
  color: ${(props) => props.theme.text};
  row-gap: 16px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

export const HeaderContainer = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
`;

export const ButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'end')}
  column-gap: 8px;
`;
