import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  position: relative;
  min-width: 25rem;
  grid-column: 1 / 3;
`;

export const LinkContainer = styled.div`
  position: fixed;

  ${flexCustom('column', 'stretch', 'flex-start')}

  background-color: ${(props) => props.theme.mainBackground};

  width: calc(100vw / 12 * 2);
  min-width: 25rem;
  height: 100vh;
  padding: 10rem 3rem 3rem;

  overflow-y: scroll;
`;
