import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  grid-column: 1 / 3;

  ${flexCustom('column', 'stretch', 'flex-start')}

  min-width: 25rem;
  padding: 10rem 3rem 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 4px 0px;
`;
