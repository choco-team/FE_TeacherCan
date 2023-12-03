import styled, { css } from 'styled-components';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const Layout = styled.div`
  ${flexCustom('row', 'center', 'center', '10px')}

  border-radius: 20px;
  background-color: ${theme.color.orange[400]}; // theme => theme.ts의 theme
  font-weight: 600;
  padding: 10px 30px;

  ${({ theme }) => css`
    color: ${theme.primaryText}; // theme => theme provider의 theme
  `}
`;

export const VacationDate = styled.div``;
