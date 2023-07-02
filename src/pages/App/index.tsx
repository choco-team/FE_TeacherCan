import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import Button from '@Components/Button';

import GlobalStyle from '@Styles/GlobalStyle';
import darkTheme from '@Styles/darkTheme';
import lightTheme from '@Styles/lightTheme';

import Header from './Header';
import SideNavLink from './SideNavLink';
import * as S from './style';

function App() {
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();
  const [main] = route.getPathnames(pathname);

  if (main === 'auth') {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <Outlet />
        </ThemeProvider>
      </>
    );
  }

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Header pathname={pathname} />
        <S.DefaultPageLayout>
          {pathname !== route.calculatePath([ROUTE_PATH.main]) && (
            <SideNavLink pathname={pathname} />
          )}
          <Outlet />
          <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
            <Button handleClick={toggleTheme}>모드 변경</Button>
          </div>
        </S.DefaultPageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
