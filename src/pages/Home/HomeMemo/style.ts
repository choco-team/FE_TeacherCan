import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'stretch', 'flex-start')}
  background-color: ${(props) => props.theme.background.basic};
  row-gap: 16px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.2rem 1.5rem rgba(198, 198, 198, 0.25);
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

export const HeaderContainer = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
`;

export const ButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'end')}
  column-gap: 8px;
`;
