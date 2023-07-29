import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  grid-column: 1 / -1;
  align-self: stretch;
  justify-self: stretch;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 60px;

  padding: 40px;
  border-radius: 12px;

  background-color: ${theme.color.primary[100]};
  color: ${theme.color.black};
`;
