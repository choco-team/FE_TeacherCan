import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  grid-column: 1 / -1;
  align-self: stretch;
  justify-self: stretch;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;

  padding: 20px;
  border-radius: 12px;

  background-color: ${theme.color.primary[100]};
  color: ${theme.color.black};
`;
