import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@Styles/GlobalStyle';
import lightTheme from '@Styles/lightTheme';

import * as S from './style';

function Auth() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <S.Layout>
          <Outlet />
        </S.Layout>
      </ThemeProvider>
    </>
  );
}

export default Auth;
