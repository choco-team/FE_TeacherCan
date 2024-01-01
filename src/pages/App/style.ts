import styled from 'styled-components';

import { MEDIA_QUERY } from '@Constant/media';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const DefaultPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${(props) => props.theme.pageBackground};
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  position: relative;

  grid-column: 3 / -1;

  margin-top: calc(2rem + 34px);
  padding: 32px;
  color: ${({ theme }) => theme.text};

  ${MEDIA_QUERY.tablet} {
    grid-column: 1 / -1;
  }
`;

export const ThemeToggleButton = styled.button`
  position: fixed;
  left: 16px;
  bottom: 16px;
  ${flexCustom('row', 'center', 'center')}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${theme.color.primary[50]};
  background-color: ${theme.color.primary[500]};
`;
