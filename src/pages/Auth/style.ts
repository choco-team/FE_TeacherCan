import styled from 'styled-components';

import backgroundImg from '@Assets/image/background/auth-bg.png';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')};
  row-gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 36px;
  background: url(${backgroundImg}) no-repeat center/cover;
`;
