import styled from 'styled-components';

import backgroundImg from '@Assets/image/background/auth-bg.png';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')};
  width: 100%;
  min-height: 100vh;
  padding: 32px;
  background: url(${backgroundImg}) no-repeat center/cover;
`;
