import AuthErrorBoundary from '@Components/ErrorBoundary/AuthErrorBoundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { PiSunBold, PiMoonStarsBold } from 'react-icons/pi';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import route from '@Utils/route';

import ModalProvider from '@Providers/ModalProvider';
import QueryProvider from '@Providers/QueryProvider';
import UserProvider from '@Providers/UserProvider';

import GlobalStyle from '@Styles/GlobalStyle';
import darkTheme from '@Styles/darkTheme';
import lightTheme from '@Styles/lightTheme';

import Header from './Header';
import SideNavLink from './SideNavLink';
import * as S from './style';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const { pathname } = useLocation();
  const [main] = route.getPathnames(pathname);

  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <QueryProvider>
          <AuthErrorBoundary>
            <UserProvider>
              {main === 'auth' ? (
                <Outlet />
              ) : (
                <ModalProvider>
                  <Header pathname={pathname} />
                  <S.DefaultPageLayout>
                    <SideNavLink pathname={pathname} />
                    <S.PageWrapper>
                      <Outlet />
                    </S.PageWrapper>
                    <S.ThemeToggleButton onClick={toggleTheme}>
                      {isLightTheme ? <PiSunBold /> : <PiMoonStarsBold />}
                    </S.ThemeToggleButton>
                  </S.DefaultPageLayout>
                </ModalProvider>
              )}
            </UserProvider>
          </AuthErrorBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
