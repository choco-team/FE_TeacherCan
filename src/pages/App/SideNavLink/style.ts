import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  grid-column: 1 / 3;

  ${flexCustom('column', 'stretch', 'flex-start')}

  background-color: ${(props) => props.theme.background.gray};

  min-width: 25rem;
  padding: 10rem 3rem 3rem;

  border-right: 1px solid ${(props) => props.theme.primaryText};
`;
