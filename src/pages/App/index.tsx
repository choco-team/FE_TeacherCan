import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { PiSunBold, PiMoonStarsBold } from 'react-icons/pi';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import ModalProvider from '@Providers/ModalProvider';

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

  const queryClient = new QueryClient();

  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <QueryClientProvider client={queryClient}>
          {main === 'auth' ? (
            <Outlet />
          ) : (
            <ModalProvider>
              <Header pathname={pathname} />
              <S.DefaultPageLayout>
                {pathname !== route.calculatePath([ROUTE_PATH.main]) && (
                  <SideNavLink pathname={pathname} />
                )}
                <S.PageWrapper>
                  <Outlet />
                </S.PageWrapper>
                <S.ThemeToggleButton handleClick={toggleTheme}>
                  {isLightTheme ? <PiSunBold /> : <PiMoonStarsBold />}
                </S.ThemeToggleButton>
              </S.DefaultPageLayout>
            </ModalProvider>
          )}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
