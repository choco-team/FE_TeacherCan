import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import logo from '@Assets/image/logo/teachercan-logo.png';

import GlobalStyle from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

import * as S from './style';

function Auth() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <S.Layout>
          <img alt="티처캔" src={logo} width={180} />
          <Outlet />
        </S.Layout>
      </ThemeProvider>
    </>
  );
}

export default Auth;
