import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

export const DefaultPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${(props) => props.theme.pageBackground};
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  margin-top: calc(2rem + 34px);
`;

export const ThemeToggleButton = styled(Button)`
  position: absolute;
  left: 16px;
  bottom: 16px;
  ${flexCustom('row', 'center', 'center')}
  width: 48px;
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 32px;
`;
